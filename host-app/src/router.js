import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
// import RemotePage from './views/RemotePage.vue';
const RemotePage = () => import('./views/RemotePage.vue');


const routes = [
  { path: '/', component: Home },
  { path: '/remote', component: RemotePage },
  { path: '/ho', component: Home },
];

// export default createRouter({
//   // history: createWebHistory(),
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });


export default createRouter({
  history: createWebHistory(),
  routes,
});