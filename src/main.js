import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faClock, faThumbtack} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'

library.add(faThumbtack)
library.add(faClock)
library.add(faFacebook)
library.add(faGoogle)
library.add(faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
