import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import RecipeDetail from '../views/ReciepeDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/plats', name: 'plats', component: Recipe },
    { path: '/plats/:id', name: 'plat-detail', component: RecipeDetail },
  ],
})

export default router