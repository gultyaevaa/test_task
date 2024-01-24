import {createApp} from 'vue'
import App from './App.vue'
import './css/main.css'
import ClickOutside from "@/directives/ClickOutside";
import PopperPosition from "@/directives/PopperPosition";

const app = createApp(App);
app.directive('clickOutside', ClickOutside)
app.directive('popperPosition', PopperPosition)
app.mount('#app')
