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
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Divider from 'primevue/divider';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

import Carousel from 'primevue/carousel';




import Login from './components/public/Login.vue'
import NavbarInit from './components/public/Navbar.vue'
import FooterInit from './components/public/Footer-Login.vue'
import Signup1 from './components/public/Signup1.vue'
import Signup2 from './components/public/Signup2.vue'
import Signup3 from './components/public/Signup3.vue'
import TripSelectBar from './components/private/trip/TripSelectbar.vue'
import Footer from './components/private/Footer.vue'
import NavbarHome from './components/private/NavbarHome.vue'
import MakeTripContent from './components/private/trip/MakeTripContent.vue'
import OrderTripSelectBar from './components/private/trip/OrderTripSelectbar.vue'
import Home from './components/public/Home.vue'


import MakeOrderContent from './components/private/order/MakeOrderContent.vue'
import PublishOrderContent from './components/private/order/PublishOrderContent.vue'
import OrderSelectBar from './components/private/order/OrderSelectBar.vue'

//My orders
import MyOrdersSelectBar from './components/private/my-orders/Selectbar-my-orders.vue'
import PayInit from './components/private/my-orders/PayInit.vue'
import PaymentDetails from './components/private/my-orders/PaymentDetails.vue'

import Checkbox from 'primevue/checkbox';
import Knob from 'primevue/knob';
import Password from 'primevue/password';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';


import mitt from 'mitt';

// import {VueGoogleMaps} from '@fawmi/vue-google-maps'



import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import './assets/_theme.scss';
import './assets/main.css'

const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(ToastService);
app.use(PrimeVue, { ripple: true })
    .use(router)
    // .use(VueGoogleMaps, {
    //     load: {
    //         key: '',
    //         language: 'es',
    //     },})
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
    .component('Message', Message)
    .component('Divider', Divider)
    .component('Splitter', Splitter)
    .component('SplitterPanel', SplitterPanel)
    .component('pv-calendar', Calendar)
    .component('pv-dropdown', Dropdown)
    .component('pv-carousel', Carousel)
    .component('Login', Login)
    .component('NavbarInit', NavbarInit)
    .component('FooterInit', FooterInit)
    .component('Signup1', Signup1)
    .component('Signup2', Signup2)
    .component('Signup3', Signup3)

    .component('Footer', Footer)
    .component('NavbarHome', NavbarHome)
    .component('MakeTripContent', MakeTripContent)
    .component('TripSelectBar', TripSelectBar)
    .component('OrderTripSelectBar', OrderTripSelectBar)


    .component('MakeOrderContent', MakeOrderContent)
    .component('PublishOrderContent', PublishOrderContent)
    .component('OrderSelectBar', OrderSelectBar)

    .component('useVuelidate', useVuelidate)
    .component('required', required)
    .component('email', email)
    .component('Dropdown', Dropdown)
    .component('Home', Home)

    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    .component('Checkbox', Checkbox)
    .component('Dialog', Dialog)

    //My orders
    .component('MyOrdersSelectBar', MyOrdersSelectBar)
    .component('PayInit', PayInit)
    .component('PaymentDetails', PaymentDetails)
    .component('Knob', Knob)
    .component('Password', Password)
    .component('Toast', Toast)

    .mount('#app');

