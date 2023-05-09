import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import Welcome from '@/views/Welcome.vue'
import EditNote from '@/views/Note/EditNote.vue'
import CreateNote from '@/views/Note/CreateNote.vue'

const routes = [
    // landing
    { path: '/', name: 'Welcome', component: Welcome, meta: { auth: false }, },
    // auth
    { path: '/login', name: 'Login', component: Login, meta: { auth: false }, },
    { path: '/register', name: 'Register', component: Register, meta: { auth: false }, },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { auth: false }, },
    { path: '/password-reset/:token', name: 'ResetPassword', component: ResetPassword, meta: { auth: false }, },
    // notes
    { path: '/home', name: 'Home', component: Home, meta: { auth: true } },
    { path: '/notes/create', name: 'CreateNote', component: CreateNote, meta: { auth: true }, },
    { path: '/notes/:id/edit', name: 'EditNote', component: EditNote, meta: { auth: true }, },

    //Not Found
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]


export default routes;