<script setup>
import PartOne from "@/pages/PartOne.vue";
import PartTwo from "@/pages/PartTwo.vue";
import TListItem from "@/components/TListItem.vue";

</script>
<template>
  <div class="app">
    <PartOne/>
    <PartTwo/>
    <TListItem></TListItem>
  </div>
</template>

<style scoped>
.app {
  background-color: var(--color-black);
  height: 100%;
  width: 100%;
}
</style>
<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
