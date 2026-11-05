import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import RecipeDetail from '../views/ReciepeDetail.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    { 
      path: '/plats', 
      name: 'plats', 
      component: Recipe 
    },
    { 
      path: '/plats/:id', 
      name: 'plat-detail', 
      component: RecipeDetail 
    },
    {
      //https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
      path :'/:pathMatch(.*)*',
      component:NotFound
    }
  ],
})

export default router