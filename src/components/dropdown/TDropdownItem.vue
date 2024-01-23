<script setup>
import {defineProps} from 'vue'

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
})
</script>

<template>
  <div class="list-item" :class="[selected? 'selected':'', disabled? 'disabled': '']">
    <div class="list-item__image">
      <svg viewBox="0 0 550 550" width="18">
        <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"
              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
      </svg>
    </div>
    <div class="list-item__text">
      <slot name="text">Text</slot>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  color: var(--color-white);
  display: flex;
  min-width: fit-content;
  width: 100%;
  padding: 10px 15px;
  background: #212b41;
  transition: var(--transition-duration);
  border-left: 3px solid transparent;
}

.list-item:not(.disabled):hover {
  background: #303f5f !important;
  transition: var(--transition-duration);
  cursor: pointer;
}

.list-item.selected {
  background: #151b29;
  border-left: 3px solid var(--color-primary);
  transition: var(--transition-duration);
}
.list-item.selected {
  background: #1b2436;
  transition: var(--transition-duration);
}

.list-item__image-content {
  fill: var(--color-white);
}

.list-item.disabled .list-item__text {
  color: #868f98;
}
.list-item.disabled .list-item__image-content {
  color: #868f98;
}
.list-item__image + .list-item__text {
  margin-left: 5px;
}
</style>