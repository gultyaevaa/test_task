import {createApp} from 'vue'
import App from './App.vue'
import './css/main.css'
import ClickOutside from "@/directives/ClickOutside";

const app = createApp(App);
app.directive('clickOutside', ClickOutside)
app.mount('#app')
