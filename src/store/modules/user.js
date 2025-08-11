import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const loginName = ref('帅哥');

	return {
		loginName
	};
});
