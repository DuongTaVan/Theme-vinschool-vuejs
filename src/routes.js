import Home from './components/Home.vue'
import JobDescription from './components/JobDescription.vue'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/job-desc', name: 'job-desc', component: JobDescription},
]
