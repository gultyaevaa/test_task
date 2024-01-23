<script setup>

import TDropdown from "@/components/dropdown/TDropdown.vue";
import TDropdownMenu from "@/components/dropdown/TDropdownMenu.vue";
import TDropdownItem from "@/components/dropdown/TDropdownItem.vue";

</script>

<template>
  <TDropdown>
    <template #default>
      <div class="dropdown-button">
        <svg class="dropdown-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" width="14">
          <path
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
        </svg>
      </div>
    </template>
    <template #dropdown>
      <TDropdownMenu>
        <TDropdownItem></TDropdownItem>
        <TDropdownItem></TDropdownItem>
        <TDropdownItem></TDropdownItem>
      </TDropdownMenu>
    </template>
  </TDropdown>
</template>

<style scoped>
.dropdown-button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  background: #151b29;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  transform: rotate(90deg);
}
.dropdown-button:hover {
  background: #303f5f;
}
.dropdown-button-icon {
  fill: var(--color-primary);
}
</style>