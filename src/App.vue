<script setup lang="ts">
import NavBar from '@/components/nav-bar/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="min-h-dvh flex flex-col gap-5">
    <NavBar />
    <div class="w-full max-w-screen-xl min-w-[320px] mx-auto px-4">
      <RouterView />
    </div>
  </main>
</template>
