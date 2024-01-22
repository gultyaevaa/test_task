<script setup>

const onClickOutside = () => {
  console.log('outside');
}

</script>

<template>
  <div v-click-outside="onClickOutside" style="height: 300px; width: 300px; background: red;"></div>
</template>

<style scoped>

</style>