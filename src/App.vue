<script setup>
import PartOne from "@/pages/PartOne.vue";
import PartTwo from "@/pages/PartTwo.vue";
import TDropdownComp from "@/components/dropdown/composition/TDropdownComp.vue";
import TDropdownMenuComp from "@/components/dropdown/composition/TDropdownMenuComp.vue";
import TDropdownItemComp from "@/components/dropdown/composition/TDropdownItemComp.vue";
import {ref} from "vue";
import PartThree from "@/pages/PartThree.vue";

/** Выбранная секция */
const selectedSection = ref('')
/**
 * Сменить отображаемую секцию
 * @param command выбранный в меню элемент
 */
const changeSection = (command) => {
  selectedSection.value = command;
}
</script>

<template>
  <div class="app">
    <TDropdownComp class="main-dropdown" @command="changeSection">
      <template #default>
        <div class="dropdown-button">
          <svg class="dropdown-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" width="14">
            <path
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
          </svg>
        </div>
      </template>
      <template #dropdown>
        <TDropdownMenuComp>
          <TDropdownItemComp value="checkbox">
            <template #text>Checkbox</template>
          </TDropdownItemComp>
          <TDropdownItemComp value="dropdown">
            <template #text>Dropdown</template>
          </TDropdownItemComp>
          <TDropdownItemComp value="dropdownWithScroll">
            <template #text>Dropdown with scroll</template>
          </TDropdownItemComp>
        </TDropdownMenuComp>
      </template>
    </TDropdownComp>
    <PartOne v-if="selectedSection === 'checkbox'" class="app-part-one"/>
    <PartTwo v-else-if="selectedSection === 'dropdown'" class="app-part-two"/>
    <PartThree v-else-if="selectedSection === 'dropdownWithScroll'" class="app-part-three"/>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  background-color: var(--color-black);
  height: 100%;
  width: 100%;
}

.main-dropdown {
  position: absolute;
  right: 5px;
  top: 5px;
}

.app-part-one {
  height: 300px;
}

.app-part-two {
  top: 200px;
  height: 600px;
}

.app-part-three {
  top: 200px;
  height: 200px;
}

.dropdown-button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  background: var(--color-background-black);
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
