<script setup>

import TestDropdown from "@/components/TestDropdown.vue";
</script>

<template>
  <div class="part-two">
    <TestDropdown class="dropdown-left-top"/>
    <TestDropdown class="dropdown-left-top-75"/>
    <TestDropdown class="dropdown-left-top-115"/>
    <TestDropdown class="dropdown-right-top"/>
    <TestDropdown class="dropdown-left-bottom"/>
    <TestDropdown class="dropdown-left-bottom-75"/>
    <TestDropdown class="dropdown-left-bottom-115"/>
    <TestDropdown class="dropdown-right-bottom"/>
    <TestDropdown class="dropdown-right-bottom-210"/>
    <TestDropdown class="dropdown-right-bottom-250"/>
  </div>
</template>

<style scoped>
.part-two {
  position: relative;
  height: calc(100% - 130px);
}

.dropdown-left-top-115 {
  top: 5px;
  left: 115px;
}

.dropdown-left-top-75 {
  top: 5px;
  left: 75px;
}

.dropdown-left-top {
  top: 5px;
  left: 5px;
}

.dropdown-right-top {
  top: 5px;
  right: 5px;
}

.dropdown-left-bottom {
  bottom: 5px;
  left: 5px;
}

.dropdown-left-bottom-75 {
  bottom: 5px;
  left: 75px;
}

.dropdown-left-bottom-115 {
  bottom: 5px;
  left: 115px;
}

.dropdown-right-bottom {
  bottom: 5px;
  right: 5px;
}

.dropdown-right-bottom-210 {
  bottom: 210px;
  right: 5px;
}
.dropdown-right-bottom-250 {
  bottom: 250px;
  right: 5px;
}
</style>