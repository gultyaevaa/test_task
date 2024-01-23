<script setup>
import {defineProps, useSlots} from 'vue'

defineProps({
  /** Выбран ли данный элемент пользователем? */
  selected: {
    type: Boolean,
    default: false,
  },
  /** Дизабл элемента */
  disabled: {
    type: Boolean,
    default: false,
  }
});
const slots = useSlots();
</script>

<template>
  <div class="dropdown-item" :class="[selected? 'selected':'', disabled? 'disabled': '']">
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
  background: #303f5f !important;
  transition: var(--transition-duration);
  cursor: pointer;
}

.dropdown-item.selected {
  background: #151b29;
  border-left: 3px solid var(--color-primary);
  transition: var(--transition-duration);
}

.dropdown-item.selected {
  background: #1b2436;
  transition: var(--transition-duration);
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