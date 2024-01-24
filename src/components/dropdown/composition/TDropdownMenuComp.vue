<script setup>

</script>

<template>
  <div class="dropdown-menu">
    <slot name="default"/>
  </div>
</template>

<style scoped>
.dropdown-menu {
  width: max-content;
  box-shadow: 0 0 6px rgb(0 0 0 / 75%);
  overflow-x: hidden;
}

::v-deep(.dropdown-item:not(:last-child)) {
  border-bottom: 1px solid var(--color-black);
}
</style>