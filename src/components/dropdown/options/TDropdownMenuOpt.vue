<script>
export default {
  name: 'TDropdownMenuOpt'
}
</script>

<template>
  <div class="dropdown-menu">
    <slot name="default"/>
  </div>
</template>

<style scoped>
.dropdown-menu {
  height: 100%;
  width: max-content;
  box-shadow: 0 0 6px rgb(0 0 0 / 75%);
  overflow-x: hidden;
}

::v-deep(.dropdown-item:not(:last-child)) {
  border-bottom: 1px solid var(--color-black);
}
</style>