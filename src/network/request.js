import axios from 'axios'

export function reuqest(config) {
  //创建axios实例
  const instance = new axios.create({
    baseURI: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  //请求拦截器
  instance.interceptors.request.use((config) => {
    return config ;
  },err => {
  })

  // 过滤器(拦截器)响应
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}
