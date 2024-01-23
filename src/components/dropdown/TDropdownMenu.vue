<script setup>

</script>

<template>
  <div class="dropdown-menu">
    <slot name="default"/>
  </div>
</template>

<style scoped>
.dropdown-menu {
  display: flex;
  flex-direction: column;
  width: max-content;
  box-shadow: 0 0 6px rgb(0 0 0 / 75%);
}
</style>