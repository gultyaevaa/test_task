<script setup>
import {onMounted, ref} from "vue";

/** Идентификатор компонента */
const id = Math.random().toString();
/** Состояние dropdown */
const state = ref(false);
/** Переключить состояние dropdown */
const changeState = () => {
  state.value = !state.value;
}

/** Обработка клика вне меню */
let clickOutsideObj = {};
onMounted(() => {
  clickOutsideObj = {
    excludeElements: [document.getElementById(id)],
    handler: () => {
      state.value = false;
    }
  }
});
</script>

<template>
  <div class="dropdown-reference" :id="id" @click="changeState">
    <slot name="default"/>
  </div>
  <transition name="slide">
    <div v-if="state" class="dropdown" style="margin: 5px 0" v-click-outside="clickOutsideObj">
      <slot name="dropdown"/>
    </div>
  </transition>
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
  transform-origin: top;
  width: fit-content;
}
</style>