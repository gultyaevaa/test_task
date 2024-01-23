<script setup>
import {computed, nextTick, onMounted, ref} from "vue";
// TODO подумать, как перенести логику по определению направление открытия менюшки в директиву
// TODO добавить события выбора элемента в выпадающем меню
/** Идентификатор компонента */
const id = Math.random().toString();
/** Состояние dropdown */
const state = ref(false);
/** Смещение влево */
const offsetLeft = ref('0');
/** Смещение по вертикали */
const offsetTop = ref(undefined);
/** Направление анимации */
const transformDirection = computed(() => {
  return !offsetTop.value ? 'top' : 'bottom';
});
/** Переключить состояние dropdown */
const changeState = () => {
  state.value = !state.value;
  if (state.value) {
    const reference = document.getElementById(id);
    if (reference) {
      nextTick(() => {
        const dropdownItems = document.getElementsByClassName('dropdown');
        if (dropdownItems.length) {
          const referenceOffsetLeft = reference.offsetLeft;
          const dropdownItem = dropdownItems.item(0);
          const dropdownWidth = dropdownItem.offsetWidth;
          if (referenceOffsetLeft > dropdownWidth) {
            offsetLeft.value = `-${dropdownWidth}px`
          }
          const dropdownHeight = dropdownItem.offsetHeight;
          const referenceOffsetBottom = reference.offsetTop;
          if (document.body.offsetHeight < referenceOffsetBottom + dropdownHeight) {
            offsetTop.value = `-${dropdownHeight + 10}px`;
          }
        }
      });
    }
  }
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
  <div :id="id" class="dropdown-reference" @click="changeState">
    <slot name="default"/>
    <transition name="slide">
      <div v-if="state" v-click-outside="clickOutsideObj" class="dropdown">
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
  left: v-bind(offsetLeft);
  top: v-bind(offsetTop);
  transition: transform var(--transition-duration) ease-in-out;
  transform-origin: v-bind(transformDirection);
  width: fit-content;
  margin: 5px 0;
}
</style>