<script>
export default {
  name: 'TDropdownOpt',
  data() {
    return {
      state: false,
      clickOutsideObj: {
      }
    }
  },
  mounted() {
    this.clickOutsideObj = {
      excludeElements: [this.$el],
      handler: () => {
        this.state = false;
      }
    }
  },
  methods: {
    changeState() {
      this.state = !this.state;
      if (this.state) {
        const rootEl = this.$refs.root;
        if (!rootEl) {
          return
        }
        this.$nextTick(() => {
          if (this.$refs.menu) {
            const dropdownItems = this.$refs.root.getElementsByClassName('dropdown-item');
            for (let i = 0; i < dropdownItems.length; i++) {
              const dropdownItem = dropdownItems.item(i);
              dropdownItem.addEventListener('click', () => {
                this.$emit('command', dropdownItem.__vnode.ctx.ctx.value);
              })
            }
          }
        });
      }
    }
  }
}
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