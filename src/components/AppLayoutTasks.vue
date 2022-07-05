<script setup>
const { tasks } = defineProps({
  tasks: {
    type: Object,
  },
});

const emits = defineEmits(["deleteTask", "toggleDone"]);

const deleteTask = (id) => {
  emits("deleteTask", id);
};

const toggleDone = (id) => {
  emits("toggleDone", id);
};
</script>

<template>
  <AppCard>
    <h1 class="text-lg font-medium py-2 px-6 sm:text-2xl">Your todo</h1>
    <div class="relative bg-light-purple h-[4px]">
      <div class="absolute w-[105px] h-[4px] bg-purple rounded-xl left-6"></div>
    </div>
    <div class="h-[87vh] sm:h-[84vh] overflow-scroll">
      <!-- TODOS -->
      <ul class="list-none" v-for="task in tasks" :key="task.id">
        <li
          class="bg-light-gray py-3 px-6 border-b-2 border-light-gray-20 md:flex md:justify-between"
          :class="task.done ? 'bg-light-green' : ''"
        >
          <span
            class="text-base sm:text-lg"
            :class="task.done ? 'text-green line-through' : 'text-black'"
          >
            {{ task.content }}
          </span>
          <div class="flex sm:flex-col gap-2 justify-between">
            <div class="flex gap-3 md:gap-2 justify-center mt-2">
              <AppButton
                @click="toggleDone(task.id)"
                :class="task.done ? 'done' : ''"
                class="rounded-[50%] sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]"
              >
                <span class="relative w-4 block">
                  <svg class="absolute top-2/4 left-2/4 translate-x-[-10%] sm:translate-x-[25%] translate-y-[-50%]"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="check-done"
                      d="M1.33333 6L6.33333 11L14.6667 1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
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

<style scoped>
.done {
  background-color: #4dd272 !important;
}

.check-done {
  stroke: white !important;
}
</style>
