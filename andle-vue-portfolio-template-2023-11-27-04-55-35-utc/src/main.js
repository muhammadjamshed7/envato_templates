import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BackToTop from 'vue-backtotop'

import 'bootstrap'
import "swiper/swiper-bundle.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../src/assets/scss/bootstrap/bootstrap.scss'
import '../src/assets/css/plugins/fontawesome.min.css'
import '../src/assets/css/plugins/icofont.min.css'
import '../src/assets/css/plugins/animate.css'
import '../src/assets/scss/style.scss'

createApp(App)
.use(router)
.use(BackToTop)
.mount('#app')