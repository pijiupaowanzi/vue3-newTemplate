<template>
	<div class="home" bg-blue p-20>{{ name }}</div>
	<el-input v-model="name" style="width: 240px" placeholder="Please input" />
	<el-button type="primary">Primary</el-button>
</template>
<script setup>
	import { ref } from 'vue';
	import { useUserStore } from '@/store/modules/user.js';
	import { getXXX } from '@/api';
	const name = ref('home');
	const userStore = useUserStore();
	console.log(userStore.loginName);
</script>

<style scoped lang="scss">
	$color: red;
	.home {
		color: $color;
	}
</style>
