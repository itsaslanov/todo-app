<script setup>
const { tasks } = defineProps({
  tasks: {
    type: Object,
  },
});

const emits = defineEmits(["deleteTask"]);

const deleteTask = (id) => {
  emits("deleteTask", id);
};
</script>

<template>
  <AppCard>
    <h1 class="text-lg font-medium py-2 px-6 sm:text-2xl">Your todo</h1>
    <div class="relative bg-light-purple h-[4px]">
      <div class="absolute w-[105px] h-[4px] bg-purple rounded-xl left-6"></div>
    </div>
    <div class="h-[87vh] sm:h-[84vh] overflow-scroll rounded-xl">
      <!-- TODOS -->
      <ul class="list-none" v-for="task in tasks" :key="task.id">
        <li
          class="bg-light-gray py-3 px-6 border-b-2 border-light-gray-20 md:flex md:justify-between"
        >
          <span class="limited-text text-base sm:text-lg">
            {{ task.content }}
          </span>
          <div class="flex sm:flex-col gap-2 justify-between">
            <div class="flex gap-3 md:gap-2 justify-center mt-2">
              <AppButton
                color="default"
                class="rounded-[50%] sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]"
              >
                <img src="../assets/icons/correct.svg" class="mx-auto w-4" />
              </AppButton>
              <AppButton
                @click="deleteTask(task.id)"
                color="danger"
                class="rounded-[50%] sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]"
              >
                <img src="../assets/icons/delete.svg" class="mx-auto w-4" />
              </AppButton>
            </div>
            <div class="self-end sm:self-center">
              <span class="text-sm sm:text-base">{{ task.date }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </AppCard>
</template>
