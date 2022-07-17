<script setup>
import { computed, ref } from "vue";

const emits = defineEmits(["addTodo"]);

const content = ref("");

const isButtonDisabled = computed(() => {
  return { "opacity-30 cursor-not-allowed": !content.value };
});

const addTodo = () => {
  if (content.value === "") {
    return;
  }
  const text = content.value;
  content.value = "";
  emits("addTodo", { id: Math.floor(Math.random() * 1000), text,  });
};

const vAutofocus = {
  mounted: (element) => {
    element.focus()
  }
}
</script>

<template>
  <AppCard
    class="py-4 px-3 sm:py-4 sm:px-6 fixed bottom-[0px] sm:bottom-[10px] w-[100%] sm:w-[630px] drop-shadow"
  >
    <form class="flex gap-2" @submit.prevent="addTodo">
      <input
        class="bg-light-purple focus:outline-none w-full p-2.5 rounded-xl font-light text-sm sm:text-lg"
        type="text"
        v-model.trim="content"
        name="text"
        placeholder="Type your task here..."
        v-autofocus
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
