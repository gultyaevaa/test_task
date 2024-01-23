<script setup>
import {computed, defineEmits, nextTick, onMounted, ref} from "vue";
// TODO подумать, как перенести логику по определению направление открытия менюшки в директиву
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
        const referenceOffsetLeft = rootEl.offsetLeft;
        const dropdownMenu = menu.value;
        const dropdownWidth = dropdownMenu.offsetWidth;
        if (referenceOffsetLeft > dropdownWidth) {
          offsetLeft.value = `-${dropdownWidth}px`
        }
        const dropdownHeight = dropdownMenu.offsetHeight;
        const referenceOffsetBottom = rootEl.offsetTop;
        if (document.body.offsetHeight < referenceOffsetBottom + dropdownHeight) {
          offsetTop.value = `-${dropdownHeight + 10}px`;
        }
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
      <div v-if="state" v-click-outside="clickOutsideObj" ref="menu" class="dropdown">
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