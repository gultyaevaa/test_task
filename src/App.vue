<script setup>
import PartOne from "@/pages/PartOne.vue";
import PartTwo from "@/pages/PartTwo.vue";
import TestDropdown from "@/components/TestDropdown.vue";

</script>
<template>
  <div class="app">
    <PartOne class="app-part-one"/>
    <PartTwo class="app-part-two"/>
    <div class="app-check-dropdown-scroll">
      <TestDropdown></TestDropdown>
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: var(--color-black);
  height: 100%;
  width: 100%;
}
.app-part-one {
  height: 300px;
}
.app-part-two {
  height: calc(100% - 300px - 200px);
}
.app-check-dropdown-scroll {
  height: 200px;
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
