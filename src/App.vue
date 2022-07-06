<script setup>
import AppInput from "./components/AppInput.vue";
import AppLayoutTasks from "./components/AppLayoutTasks.vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted } from "vue";

// ALL STORED DATA
const tasks = ref([]);

// ADD TASK
const addTodo = (task) => {
  tasks.value.unshift(task);
};

// DELETE TASK
const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

// DONE TASK
const toggleDone = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  tasks.value[index].done = !tasks.value[index].done;
};

// ONMOUNTED, this gets all stored info from firebase
// onMounted(async () => {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   let fbTasks = [];
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     const todo = {
//       id: doc.id,
//       content: doc.data().content,
//       date: doc.data().date,
//       done: doc.data().done,
//     };
//     fbTasks.push(todo);
//   });
//   tasks.value = fbTasks;
// });

onMounted(async () => {
  onSnapshot(collection(db, "tasks"), (querySnapshot) => {
    const fbTasks = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        date: doc.data().date,
        done: doc.data().done,
      };
      fbTasks.push(todo);
     tasks.value = fbTasks;
    });
  });
});
</script>

<template>
  <div class="max-w-[630px] mx-auto mt-0 sm:mt-[8.5px]">
    <AppLayoutTasks
      :tasks="tasks"
      @deleteTask="deleteTask"
      @toggleDone="toggleDone"
    />
    <AppInput @addTodo="addTodo" />
  </div>
</template>
