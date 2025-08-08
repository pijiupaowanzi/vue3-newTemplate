import axios from 'axios'

const service = axios.create({
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
})

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const { data } = response
		return data
	},
	(error) => {
		return Promise.reject(error)
	}
)

// 请求拦截器
service.interceptors.request.use(
	(config) => config,
	(error) => {
		error.data = {}
		error.data.msg = '服务器异常'
		return Promise.reject(error)
	}
)

export default service
