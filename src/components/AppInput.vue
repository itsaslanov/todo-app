<script setup>
import { computed, ref } from "vue";

const emits = defineEmits(["addTodo"]);

const content = ref("");

const isButtonDisabled = computed(() => {
  return { "opacity-30 cursor-not-allowed": !content.value };
});

// Current date
const currentData = new Date();
const hoursAndMinutes = `${currentData.getHours()}:${currentData
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

const addTodo = () => {
  if (content.value === "") {
    return;
  }

  const text = content.value;
  content.value = "";
  emits("addTodo", {
    id: Math.round(Math.random() * 10000),
    content: text,
    done: false,
    date: hoursAndMinutes,
  });
};
</script>

<template>
  <AppCard
    class="py-4 px-3 sm:py-4 sm:px-6 fixed bottom-0 w-[100%] sm:w-[630px] drop-shadow"
  >
    <form class="flex gap-2" @submit.prevent="addTodo">
      <input
        class="bg-light-purple w-full p-2.5 rounded-xl font-light text-sm sm:text-lg"
        type="text"
        v-model.trim="content"
        name="text"
        placeholder="Type your task here..."
      />
      <AppButton
        class="px-12 rounded-xl text-sm sm:text-lg"
        color="primary"
        :class="isButtonDisabled"
        >Add</AppButton
      >
    </form>
  </AppCard>
</template>
