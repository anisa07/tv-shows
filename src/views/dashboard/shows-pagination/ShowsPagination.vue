<script setup lang="ts">
import Select from '@/components/select/Select.vue';

defineProps<{ pageOptions: number[] }>();

const page = defineModel('page', { required: true });
</script>

<template>
  <Select v-model:value="page" :options="pageOptions" label="Page" name="page" />
</template>
