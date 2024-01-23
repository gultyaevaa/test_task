<script setup>

import TDropdownItem from "@/components/dropdown/TDropdownItem.vue";
import TDropdown from "@/components/dropdown/TDropdown.vue";
import TDropdownMenu from "@/components/dropdown/TDropdownMenu.vue";
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
        <TDropdownItem>
          <template #text>Первый (первый)</template>
        </TDropdownItem>
        <TDropdownItem>
          <template #text>Второй</template>
        </TDropdownItem>
        <TDropdownItem>
          <template #text>Третий</template>
        </TDropdownItem>
        <TDropdownItem>
          <template #text>Четвёртый</template>
        </TDropdownItem>
        <TDropdownItem disabled>
          <template #text>Пятый</template>
          <template #image>
            <svg viewBox="0 0 550 550" width="18">
              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"
                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
          </template>
        </TDropdownItem>
        <TDropdownItem>
          <template #text>Шестой</template>
          <template #image>
            <svg viewBox="0 0 550 550" width="18">
              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"
                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
          </template>
        </TDropdownItem>
      </TDropdownMenu>
    </template>
  </TDropdown>
</template>

<style scoped>
.dropdown-button {
  margin-left: 5px;
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