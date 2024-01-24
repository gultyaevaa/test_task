<script setup>
import {defineEmits, nextTick, onMounted, ref} from "vue";

/** Состояние dropdown */
const state = ref(false);
const root = ref(null);
const menu = ref(null);
const emits = defineEmits(['command']);
/** Переключить состояние dropdown */
const changeState = () => {
  state.value = !state.value;
  if (state.value) {
    const rootEl = root.value;
    if (!rootEl) {
      return
    }
    nextTick(() => {
      if (menu.value) {
        const dropdownItems = root.value.getElementsByClassName('dropdown-item');
        for (let i = 0; i < dropdownItems.length; i++) {
          const dropdownItem = dropdownItems.item(i);
          dropdownItem.addEventListener('click', () => {
            emits('command', dropdownItem.__vnode.ctx.ctx.value);
          })
        }
      }
    });
  }
}

/** Обработка клика вне меню */
let clickOutsideObj = {};
onMounted(() => {
  clickOutsideObj = {
    excludeElements: [root.value],
    handler: () => {
      state.value = false;
    }
  }
});
</script>

<template>
  <div ref="root" class="dropdown-reference" @click="changeState">
    <slot name="default"/>
    <transition name="slide">
      <div v-if="state" v-popper-position v-click-outside="clickOutsideObj" ref="menu" class="dropdown">
        <slot name="dropdown"/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-from, .slide-leave-to {
  transform: scaleY(0);
}

.dropdown-reference {
  width: fit-content;
}

.dropdown {
  position: absolute;
  transition: transform var(--transition-duration) ease-in-out;
  width: fit-content;
  margin: 5px 0;
}
</style>