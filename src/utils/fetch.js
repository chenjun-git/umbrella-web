import axios from 'axios'
import store from '../store'
import vue from 'vue'

const instance = axios.create({
  baseURL: 'http://localhost:8081/#',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
	return config;
  }, 
  error => {
	console.log(error)
	return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => response,
  error => {
    // console.log('err' + error)
    // vue.$Message.error({
    // 	message: error.message,
    // 	duration: 5 * 1000,
    // 	closable: true
    // })
    return Promise.reject(error)
  }
)

export default instance