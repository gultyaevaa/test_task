<script setup>

// import TDropdownItemComp from "@/components/dropdown/composition/TDropdownItemComp.vue";
// import TDropdownComp from "@/components/dropdown/composition/TDropdownComp.vue";
// import TDropdownMenuComp from "@/components/dropdown/composition/TDropdownMenuComp.vue";
import TDropdownItemOpt from "@/components/dropdown/options/TDropdownItemOpt.vue";
import TDropdownOpt from "@/components/dropdown/options/TDropdownOpt.vue";
import TDropdownMenuOpt from "@/components/dropdown/options/TDropdownMenuOpt.vue";
const logCommand = (command) => {
  console.log(command)
}
</script>

<template>
<!--  <TDropdownComp class="test-dropdown" @command="logCommand">-->
<!--    <template #default>-->
<!--      <div class="dropdown-button">-->
<!--        <svg class="dropdown-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" width="14">-->
<!--          <path-->
<!--              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>-->
<!--        </svg>-->
<!--      </div>-->
<!--    </template>-->
<!--    <template #dropdown>-->
<!--      <TDropdownMenuComp>-->
<!--        <TDropdownItemComp value="one">-->
<!--          <template #text>Первый</template>-->
<!--        </TDropdownItemComp>-->
<!--        <TDropdownItemComp value="two">-->
<!--          <template #text>Второй</template>-->
<!--        </TDropdownItemComp>-->
<!--        <TDropdownItemComp value="three">-->
<!--          <template #text>Третий</template>-->
<!--        </TDropdownItemComp>-->
<!--        <TDropdownItemComp value="four">-->
<!--          <template #text>Четвёртый</template>-->
<!--        </TDropdownItemComp>-->
<!--        <TDropdownItemComp value="five" disabled>-->
<!--          <template #text>Пятый</template>-->
<!--          <template #image>-->
<!--            <svg viewBox="0 0 550 550" width="18">-->
<!--              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"-->
<!--                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>-->
<!--            </svg>-->
<!--          </template>-->
<!--        </TDropdownItemComp>-->
<!--        <TDropdownItemComp value="six">-->
<!--          <template #text>Шестой</template>-->
<!--          <template #image>-->
<!--            <svg viewBox="0 0 550 550" width="18">-->
<!--              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"-->
<!--                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>-->
<!--            </svg>-->
<!--          </template>-->
<!--        </TDropdownItemComp>-->
<!--      </TDropdownMenuComp>-->
<!--    </template>-->
<!--  </TDropdownComp>-->
  <TDropdownOpt class="test-dropdown" @command="logCommand">
    <template #default>
      <div class="dropdown-button">
        <svg class="dropdown-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" width="14">
          <path
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
        </svg>
      </div>
    </template>
    <template #dropdown>
      <TDropdownMenuOpt>
        <TDropdownItemOpt value="one">
          <template #text>Первый</template>
        </TDropdownItemOpt>
        <TDropdownItemOpt value="two">
          <template #text>Второй</template>
        </TDropdownItemOpt>
        <TDropdownItemOpt value="three">
          <template #text>Третий</template>
        </TDropdownItemOpt>
        <TDropdownItemOpt value="four">
          <template #text>Четвёртый</template>
        </TDropdownItemOpt>
        <TDropdownItemOpt value="five" disabled>
          <template #text>Пятый</template>
          <template #image>
            <svg viewBox="0 0 550 550" width="18">
              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"
                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
          </template>
        </TDropdownItemOpt>
        <TDropdownItemOpt value="six">
          <template #text>Шестой</template>
          <template #image>
            <svg viewBox="0 0 550 550" width="18">
              <path class="list-item__image-content" xmlns="http://www.w3.org/2000/svg"
                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
          </template>
        </TDropdownItemOpt>
      </TDropdownMenuOpt>
    </template>
  </TDropdownOpt>
</template>

<style scoped>
.test-dropdown {
  position: absolute;
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