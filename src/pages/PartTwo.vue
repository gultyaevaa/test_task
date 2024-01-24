<script setup>

import TestDropdown from "@/components/TestDropdown.vue";
</script>

<template>
  <div class="part-two">
    <TestDropdown class="dropdown-left-top"/>
    <TestDropdown class="dropdown-left-top-110"></TestDropdown>
    <TestDropdown class="dropdown-left-top-150"></TestDropdown>
    <TestDropdown class="dropdown-right-top"/>
    <TestDropdown class="dropdown-left-bottom"/>
    <TestDropdown class="dropdown-left-bottom-110"/>
    <TestDropdown class="dropdown-left-bottom-150"/>
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

.dropdown-left-top-150 {
  top: 5px;
  left: 150px;
}

.dropdown-left-top-110 {
  top: 5px;
  left: 110px;
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

.dropdown-left-bottom-110 {
  bottom: 5px;
  left: 110px;
}

.dropdown-left-bottom-150 {
  bottom: 5px;
  left: 150px;
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