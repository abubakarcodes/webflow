/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.use(VueRouter)

const routes = [
    { path: '/example', component: require('./components/ExampleComponent.vue').default , name:"example" },
    { path: '/first-question', component: require('./components/FirstQuestion.vue').default , name: "first-question" },
    { path: '/second-question', component: require('./components/SecondQuestion.vue').default , name: "second-question" },
    { path: '/third-question', component: require('./components/ThirdQuestion.vue').default , name: "third-question" },
    { path: '/fourth-question', component: require('./components/FourthQuestion.vue').default , name: "fourth-question" },
    { path: '/fifth-question', component: require('./components/FifthQuestion.vue').default , name: "fifth-question" },
    { path: '/sixth-question', component: require('./components/SixthQuestion.vue').default , name: "sixth-question" },
    { path: '/seventh-question', component: require('./components/SeventhQuestion.vue').default , name: "seventh-question" },
    { path: '/eighth-question', component: require('./components/EighthQuestion.vue').default , name: "eighth-question" },
    { path: '/eighth-question-no-response', component: require('./components/EighthQuestionNoResponse.vue').default , name: "eighth-question-no-response" },





  ]

  const router = new VueRouter({
    routes
  })
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('first-question', require('./components/FirstQuestion.vue').default);
Vue.component('second-question', require('./components/SecondQuestion.vue').default);
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.component('third-question', require('./components/ThirdQuestion.vue').default);
Vue.component('fourth-question', require('./components/FourthQuestion.vue').default);
Vue.component('fifth-question', require('./components/FifthQuestion.vue').default);
Vue.component('sixth-question', require('./components/SixthQuestion.vue').default);
Vue.component('seventh-question', require('./components/seventhQuestion.vue').default);
Vue.component('eighth-question', require('./components/EighthQuestion.vue').default);
Vue.component('eighth-question-no-response', require('./components/EighthQuestionNoResponse.vue').default);







/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// new Vue({
//     el: '#app',
//     router,
//     mounted(){
//         this.$router.push('first-question');
//     }
//   }

// );



new Vue({
    el: '#app2'
  }

);
