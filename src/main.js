import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
// Main views
import Home from './views/Home.vue'
import Methods from './views/Methods.vue'
import Results from './views/Results.vue'
import Contact from './views/Contact.vue'

import MILP from './views/methods/solvers/MILP.vue'
import Heuristic1 from './views/methods/solvers/Heuristic1.vue'
import Heuristic2 from './views/methods/solvers/Heuristic2.vue'
import PointMassSim from './views/methods/environments/PointMassSim.vue'
import ARGoSSim from './views/methods/environments/ARGoSSim.vue'
import ARGoSReal from './views/methods/environments/ARGoSReal.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home },
    { path: '/methods', component: Methods },
    { path: '/results', component: Results },
    { path: '/contact', component: Contact },
    { path: '/methods/milp', component: MILP },
    { path: '/methods/h1', component: Heuristic1 },
    { path: '/methods/h2', component: Heuristic2 },
    { path: '/methods/pms', component: PointMassSim },
    { path: '/methods/argos-sim', component: ARGoSSim },
    { path: '/methods/argos-real', component: ARGoSReal },
    { path: '/:pathMatch(.*)*', component: {
            template: "",
            created: function() {
                // Redirect to home
                window.location.href = "/";
            }
        }
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})


// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
