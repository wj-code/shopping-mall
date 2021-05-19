function debounce(func,waitTime) {
  let timer = null ;
  return function (...args) {
    if(timer) clearTimeout(timer) ;
    timer = setTimeout(() => {
      func.apply(this,args);
    },waitTime)
  }
}
const utils = {
  mydebounce:debounce ,
}
export default utils ;
