import {reuqest} from "./request";

export function getHomeMultidata() {
  return reuqest({
    url:'/home/multidata'
  })
}
export function getProductData(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
