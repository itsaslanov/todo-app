<script setup>
import AppInput from "./components/AppInput.vue";
import AppLayoutTasks from "./components/AppLayoutTasks.vue";

import { ref } from "vue";

const tasks = ref([
  {
    id: 1,
    content:
      "I need to complete my homeworks until tomorrow morning that’s my goal to do it for now",
    done: false,
    date: null,
  },
  {
    id: 2,
    content:
      "Must finish the project, and provide it to the client by the evening!",
    done: false,
    date: null,
  },
  {
    id: 3,
    content:
      "meet up with some friends in the evening after showing my project to the client))",
    done: false,
    date: null,
  },
]);

const addTodo = (task) => {
  tasks.value.unshift(task);
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const toggleDone = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  tasks.value[index].done = !tasks.value[index].done;
};

const show = ref(true);
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
