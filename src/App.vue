<script setup lang="ts">
import Home from "./components/Home.vue";
import NavButton from "./components/NavButton.vue";
</script>

<template>
  <div class='relative bg-purple-800 text-white w-full h-screen overflow-hidden'>
      <div class='flex flex-row w-full gap-2 pl-16 py-16 pr-8'>
        <div class="relative w-1/3 bg-my-bg flex bg-cover border-2 border-black shadow-[8px_8px_0_#000]">
            <div class='flex flex-col gap-2 w-full items-end px-2 py-2'>
              <a href='https://www.linkedin.com/in/jois-andresky' class='p-3 text-sm bg-white hover:bg-yellow-400 text-black font-semibold border-2 shadow-[5px_5px_0_#000] hover:shadow-[0_0_0_#000] transition-all ease-out duration-100 border-black'>
                <svg class="w-5 h-5 text-gray-900 group-hover:text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href='https://github.com/joisandresky' class='p-3 text-sm bg-white hover:bg-yellow-400 text-black font-semibold border-2 shadow-[5px_5px_0_#000] hover:shadow-[0_0_0_#000] transition-all ease-out duration-100 border-black'>
                <svg class="w-5 h-5 text-gray-900 group-hover:text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </a>
            </div>
        </div>
        <div class='w-2/3 flex flex-col justify-center p-56'>
          <Home />
        </div>
      </div>
      <NavButton />
    </div>
</template>

<style scoped>
</style>
