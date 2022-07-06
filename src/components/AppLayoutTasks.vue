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
      <div
        class="absolute sm:w-[105px] w-[80px] h-[4px] bg-purple rounded-xl left-6"
      ></div>
    </div>
    <div class="h-[87vh] sm:h-[84vh] overflow-x-hidden overflow-scroll">
      <!-- TODOS -->
      <TransitionGroup name="list" tag="ul" class="list-none">
        <li
          v-for="task in tasks"
          :key="task.id"
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
                  <svg
                    class="absolute top-2/4 left-2/4 translate-x-[-10%] sm:translate-x-[25%] translate-y-[-50%]"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#767676"
                      :class="task.done ? 'check-done' : ''"
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
                <span class="relative w-4 block">
                  <svg
                    class="absolute top-2/4 left-2/4 translate-x-[-10%] sm:translate-x-[15%] translate-y-[-50%]"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.4375 1.71H5.25C5.35313 1.71 5.4375 1.6245 5.4375 1.52V1.71H12.5625V1.52C12.5625 1.6245 12.6469 1.71 12.75 1.71H12.5625V3.42H14.25V1.52C14.25 0.681625 13.5773 0 12.75 0H5.25C4.42266 0 3.75 0.681625 3.75 1.52V3.42H5.4375V1.71ZM17.25 3.42H0.75C0.335156 3.42 0 3.75963 0 4.18V4.94C0 5.0445 0.084375 5.13 0.1875 5.13H1.60312L2.18203 17.5513C2.21953 18.3611 2.88047 19 3.67969 19H14.3203C15.1219 19 15.7805 18.3635 15.818 17.5513L16.3969 5.13H17.8125C17.9156 5.13 18 5.0445 18 4.94V4.18C18 3.75963 17.6648 3.42 17.25 3.42ZM14.1398 17.29H3.86016L3.29297 5.13H14.707L14.1398 17.29Z"
                      fill="#F53030"
                    />
                  </svg>
                </span>
              </AppButton>
            </div>
            <div class="self-end sm:self-center">
              <span class="text-sm sm:text-base">{{ task.date }}</span>
            </div>
          </div>
        </li>
      </TransitionGroup>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
