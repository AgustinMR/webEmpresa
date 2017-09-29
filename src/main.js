import Vue from 'vue'
import VueRouter from 'vue-router';
import VueImgInputer from 'vue-img-inputer';
import App from './App.vue'
import {store} from './store'

import Inicio from './components/Inicio.vue';
import Nav from './components/Nav.vue';
import Login from './components/Login.vue';
import Perfil from './components/Perfil.vue';
import Contenido from './components/Contenido.vue';
import Reporte from './components/Reporte.vue';
import VideoUpload from './components/VideoUpload.vue';
import Atributo from './components/Atributo.vue';

Vue.component('paperviu-inicio', Inicio);
Vue.component('paperviu-nav', Nav);
Vue.component('paperviu-login', Login);
Vue.component('paperviu-perfil', Perfil);
Vue.component('paperviu-contenido', Contenido);
Vue.component('paperviu-reporte', Reporte);
Vue.component('paperviu-video-upload', VideoUpload);
Vue.component('paperviu-atributo', Atributo);


Vue.component('VueImgInputer', VueImgInputer);

Vue.use(VueRouter);
const routes = [
    {path: '/inicio', component: Inicio},
    {path: '/perfil', component: Perfil},
    {path: '/reportes', component: Reporte},
    {path: '/contenidos', component: Contenido},
    {path: '/', component: Inicio}
];
const router = new VueRouter({
    routes
});


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
