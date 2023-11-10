<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'


</script>

<template>
  <Sidebar />
  <main class="min-h-screen">
    <section id="main" class="w-full">
      <div class="lg:ml-[362px] 2xl:ml-[262px] my-[24px]">
        <div class="">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>
