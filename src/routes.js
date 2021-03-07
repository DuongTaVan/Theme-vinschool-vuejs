import Home from './components/pages/home/Index'
import JobDescription from './components/pages/detail/Index'
import JobDetail from './components/pages/detail/JobDetail.vue'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: '/job-desc', name: 'job-desc', component: JobDescription, children: [
            {path: ':id', name: 'job-index', component: JobDetail},
        ]
    },
]
