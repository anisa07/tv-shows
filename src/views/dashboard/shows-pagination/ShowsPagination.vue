<script setup lang="ts">
import Select from '@/components/select/Select.vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{ pageOptions: number[] }>();

const page = defineModel('page', { required: true });
const router = useRouter();

watch(page, (newPage) => {
  if (typeof newPage === 'number' && newPage > 0 && !isNaN(newPage)) {
    router.push({ query: { page: newPage } });
  }
});
</script>

<template>
  <Select v-model:value="page" :options="pageOptions" label="Page" name="page" />
</template>
