import axios from 'axios'
import vue from 'vue'

const service = aixos.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
	return config;
  }, 
  error => {
	console.log(error)
	return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    vue.$Message.error({
    	message: error.message,
    	duration: 5 * 1000,
    	closable: true
    })
    return Promise.reject(error)
  }
)

export default service;