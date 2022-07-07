<script setup>
import AppInput from "./components/AppInput.vue";
import AppLayoutTasks from "./components/AppLayoutTasks.vue";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted, onUnmounted } from "vue";

const fbCollection = collection(db, "tasks");
const fbCollectionQuery = query(fbCollection, orderBy("date", "desc"));

// ALL STORED DATA
const tasks = ref([]);
const loading = ref(true);
const checkTheLength = ref(true);
let firebaseListener;

// CURRENT DATE
const currentData = new Date();
const hoursAndMinutes = `${currentData.getHours()}:${currentData
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

// ADD TASK
const addTodo = (task) => {
  addDoc(fbCollection, {
    content: task.text,
    hours: hoursAndMinutes,
    date: Date.now(),
    done: false,
  });
};

// DELETE TASK
const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
  deleteDoc(doc(fbCollection, id));
};

// DONE TASK
const toggleDone = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  updateDoc(doc(fbCollection, id), {
    done: !tasks.value[index].done,
  });
};

// ONMOUNTED, this gets all stored data from firebase
onMounted(() => {
  loading.value = true;
  firebaseListener = onSnapshot(fbCollectionQuery, (querySnapshot) => {
    const fbTasks = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        hours: doc.data().hours,
        date: doc.data().date,
        done: doc.data().done,
      };
      fbTasks.push(todo);
      tasks.value = fbTasks;

      if (fbTasks.length > 0) {
        checkTheLength.value = false;
      }
    });

    loading.value = false;
  });
});

onUnmounted(() => {
  if (!firebaseListener) {
    return;
  }
  firebaseListener();
});
</script>

<template>
  <div class="max-w-[630px] mx-auto mt-0 sm:mt-[8.5px]">
    <AppLayoutTasks
      :tasks="tasks"
      :loading="loading"
      :checkTheLength="checkTheLength"
      @deleteTask="deleteTask"
      @toggleDone="toggleDone"
    />
    <AppInput @addTodo="addTodo" />
  </div>
</template>
