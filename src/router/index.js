import { createRouter, createWebHashHistory } from 'vue-router';
import { close, start } from '@/utils/editNprogress';

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		component: () => import('@/views/home.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export function resetRouter() {
	const newRouter = createRouter({
		history: createWebHashHistory(),
		routes: []
	});
	router.matcher = newRouter.matcher;
}

router.beforeEach((_to, _from, next) => {
	start();
	next();
});

router.afterEach(() => {
	close();
});

export default router;
