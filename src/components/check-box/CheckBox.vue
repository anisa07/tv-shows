<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ label: string; name: string }>();
const value = defineModel('checked', { required: true });

const checkId = computed(() => `check-${props.name}`);
</script>

<template>
  <div class="flex items-center gap-2 check-container">
    <input class="checkbox" type="checkbox" :id="checkId" v-model="value" />
    <label class="font-bold" :for="checkId">{{ label }}</label>
  </div>
</template>

<style scoped>
.check-container {
  input[type='checkbox'] {
    appearance: none;
    background-color: var(--color-input);
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color-border);
    border-radius: 0.15rem;
    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1.75);
    background-color: var(--color-primary);
  }
}
</style>
