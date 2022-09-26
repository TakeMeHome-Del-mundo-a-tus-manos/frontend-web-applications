import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

// App Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";


// Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import Message from 'primevue/message';
import Divider from 'primevue/divider';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

import './assets/_theme.scss';
import './assets/main.css'

createApp(App)
 .use(PrimeVue, { ripple: true })
 .use(router)
 .component('Card', Card)
 .component('Button', Button)
 .component('SelectButton', SelectButton)
 .component('Sidebar', Sidebar)
 .component('Avatar', Avatar)
 .component('Menu', Menu)
 .component('Menubar', Menubar)
 .component('Toolbar', Toolbar)
 .component('InputText', InputText)
 .component('badge', Badge)
 .component('Message',Message)
 .component('Divider',Divider)
 .component('Splitter',Splitter)
 .component('SplitterPanel',SplitterPanel)

 .mount('#app');
 