<script setup>

import TestDropdown from "@/components/TestDropdown.vue";
</script>

<template>
  <div class="part-two">
    <TestDropdown class="dropdown-left-top"/>
    <TestDropdown class="dropdown-right-top"/>
    <TestDropdown class="dropdown-left-bottom"/>
    <TestDropdown class="dropdown-right-bottom"/>
  </div>
</template>

<style scoped>
.part-two {
  position: relative;
  height: calc(100% - 130px);
}
.dropdown-left-top {
  position: absolute;
  top: 5px;
  left: 5px;
}
.dropdown-right-top {
  position: absolute;
  top: 5px;
  right: 5px;
}
.dropdown-left-bottom {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
.dropdown-right-bottom {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>