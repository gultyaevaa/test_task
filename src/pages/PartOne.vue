<script setup>
import TCheckbox from "@/components/TCheckbox.vue";
import {computed, ref} from "vue";
/** Значение для чекбокса лицензионного соглашение */
const license = ref(false);
/** Список элементов для построения чекбоксов */
const checkboxList = ref([
      {
        "id": 1,
        "title": "apple",
        "visible": true,
        "disabled": true,
      },
      {
        "id": 2,
        "title": "melon",
        "visible": false
      },
      {
        "id": 3,
        "title": "pineapple",
        "visible": true
      }
    ]
);
/** Выбранные пользователем чекбоксы */
const visibleItems = computed(()=>{
  return checkboxList.value.filter(el=>el.visible)
})

</script>

<template>
  <div class="part-one">
    <div class="part-one-block license">
      <TCheckbox v-model="license">
        Я принимаю&nbsp;<span class="license-underline">лицензионное соглашение</span>
      </TCheckbox>
    </div>
    <div class="part-one-block">
      <div class="part-one-block-list">
        <TCheckbox v-for="checkboxItem of checkboxList" :key="checkboxItem.id" v-model="checkboxItem.visible"
                   :disabled="checkboxItem.disabled">
          {{ checkboxItem.title }}
        </TCheckbox>
      </div>
      <div class="vertical-line"></div>
      <ul class="part-one-block-visible-items">
        <li class="part-one-block-visible-items_item" v-for="item of visibleItems" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.part-one {
  display: flex;
}

.license-underline {
  text-decoration: underline;
  color: white;
  transition: var(--transition-duration);
}

.part-one-block {
  border: 1px solid var(--text-color-disabled);
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: flex-start;
}

.part-one-block-list .checkbox-label {
  margin: 5px 0;
}

.part-one-block-visible-items_item {
  color: var(--color-white);
}

.license-underline:hover {
  color: var(--color-primary);
  transition: var(--transition-duration);
}

.vertical-line {
  height: 100%;
  border-left: 1px solid var(--text-color-disabled);
  margin: 0 15px;
}
</style>