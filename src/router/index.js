import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/todo', name: 'Todo', component: TodoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router