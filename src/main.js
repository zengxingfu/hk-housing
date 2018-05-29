import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'
import 'swiper/dist/css/swiper.min.css';

// import './main.scss';

Vue.use(VueMaterial);

const bus = new Vue();
Vue.prototype.bus = bus;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});