<script lang="ts" setup generic="T extends PropertyKey | undefined">
import { computed } from 'vue';
import type { SelectProps } from './SelectProps';

const props = withDefaults(defineProps<SelectProps<T>>(), {
  showEmptyOption: false,
  placeholder: 'Select an option',
});

const value = defineModel('value', { required: true });

const selectId = computed(() => `select-${props.name}`);
</script>

<template>
  <div class="inline-flex flex-col gap-1">
    <label :for="selectId" class="font-bold">{{ label }}</label>
    <div class="select flex gap- relative">
      <select
        :name="name"
        :id="selectId"
        v-model="value"
        class="base-input text-lg appearance-none focus:outline-primary"
        :class="{ 'text-placeholder': !value, 'text-text': value }"
      >
        <option disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select {
  select {
    border: 1px solid var(--color-border);
  }
}

.select::before,
.select::after {
  --size: 0.3rem;
  position: absolute;
  content: '';
  right: 1rem;
  pointer-events: none;
}

.select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid var(--color-border);
  top: 40%;
}

.select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid var(--color-border);
  top: 55%;
}
</style>
