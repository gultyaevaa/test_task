<script setup>

const onClickOutside = () => {
  console.log('outside');
}
</script>

<template>
  <div v-click-outside="onClickOutside">PartTwo</div>
</template>

<style scoped>

</style>