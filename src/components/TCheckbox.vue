<script setup>
import {computed, defineModel, defineProps} from "vue";

defineProps({
  /** Дизабл компонента */
  disabled: {
    type: Boolean
  }
});
/** v-model */
const model = defineModel();
/** Идентификатор компонента */
const id = Math.random().toString();
/** Идентификатор для чекбокса */
const checkboxId = computed(() => {
  return `checkbox-${id}`;
});
</script>

<template>
  <label class="checkbox-label" :for="checkboxId">
    <input v-model="model" :disabled="disabled" v-bind="$attrs" :id="checkboxId" class="checkbox" type="checkbox">
    <span class="checkbox-view">
    <svg class="checkbox-icon" viewBox="0 0 450 450" width="18" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
    </svg>
  </span>
    <slot name="default"/>
  </label>
</template>

<style scoped>
.checkbox {
  appearance: none;
}

.checkbox-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #92a4c8;
  transition: .3s;
  user-select: none;
}

.checkbox-view {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 1px solid #303f5f;
  border-radius: 6px;
  background: transparent;
  transition: .3s;
}

.checkbox-view:hover {
  border-color: #4ab4ff;
}

.checkbox-icon {
  opacity: 0;
  transition: .3s;
}

.checkbox:checked + .checkbox-view svg {
  fill: #4ab4ff;
}

.checkbox:checked.checkbox:disabled + .checkbox-view svg {
  fill: #303f5f;
}

.checkbox:checked + .checkbox-view .checkbox-icon {
  opacity: 1;
}

.checkbox-label:has(.checkbox:checked:not(:disabled)) {
  color: white;
  transition: .3s;
}
</style>