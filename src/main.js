import { createApp } from 'vue'
import App from './App.vue'
import AppCard from "./components/UI/AppCard.vue";
import AppButton from "./components/AppButton.vue";

// STYLESHEET IMPORTS
import './assets/index.css'
import './assets/base.css'

const app = createApp(App);

app
    .component('AppCard', AppCard)
    .component('AppButton', AppButton)

app.mount('#app');

