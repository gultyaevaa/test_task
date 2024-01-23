<script setup>
import {defineProps, useSlots} from 'vue'

defineProps({
  /** Дизабл элемента */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Значение элемента меню */
  value: {
    type: String,
    required: true,
  }
});
const slots = useSlots();
</script>

<template>
  <div class="dropdown-item" :class="[disabled? 'disabled': '']">
    <div class="dropdown-item__image" v-if="slots.image">
      <slot name="image"></slot>
    </div>
    <div class="list-item__text">
      <slot name="text"/>
    </div>
  </div>
</template>

<style scoped>
.dropdown-item {
  color: var(--color-white);
  display: flex;
  min-width: fit-content;
  width: 100%;
  padding: 10px 15px;
  background: #212b41;
  transition: var(--transition-duration);
  border-left: 3px solid transparent;
}

.dropdown-item:not(.disabled):hover {
  background: #151b29;
  border-left: 3px solid var(--color-primary);
  cursor: pointer;
}

.dropdown-item__image {
  fill: var(--color-white);
}

.dropdown-item.disabled .list-item__text {
  color: #868f98;
}

.dropdown-item.disabled .dropdown-item__image {
  fill: #868f98;
}

.dropdown-item__image + .list-item__text {
  margin-left: 5px;
}
</style>