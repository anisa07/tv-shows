<script lang="ts" setup>
import { computed, defineModel } from 'vue';
import type { InputProps } from './InputProps';

const props = defineProps<InputProps>();
const value = defineModel('value', { required: true });

const inputId = computed(() => `input-${props.name}`);
</script>

<template>
  <div class="input flex flex-col gap-1">
    <label :for="inputId" class="font-bold">{{ label }}</label>
    <input
      :id="inputId"
      v-model="value"
      class="base-input text-lg"
      :placeholder="placeholder ?? label"
      type="text"
      :name="name"
    />
  </div>
</template>
