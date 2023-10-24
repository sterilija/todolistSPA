import { createRouter, createWebHistory } from "vue-router";
import Todo from '../../components/Todo.vue';

const routes = [
    {path: '/', name: 'All', component: Todo},
    {path: '/unfinished', name: 'Unfinished', component: Todo},
];
const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router