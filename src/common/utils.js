//功能性函数，公用性较强的函数搜集
//防抖函数
export function debounce(func, delay=100) {//默认100ms调用一次
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)

  }

}

export function formateData(date, s, state) {
  const myData = new Date(date * 1000);
  const year = myData.getFullYear();
  const month = myData.getMonth() + 1;
  const day = myData.getDay();
  let newData = year + s + padeLeftZero(month) + s + padeLeftZero(day);
  if (state) {
    const hour = myData.getHours();
    const minute = myData.getMinutes();
    const second = myData.getSeconds();
    newData = newData + " " + padeLeftZero(hour) + ':' + padeLeftZero(minute) + ':' + padeLeftZero(second);
  }
  return newData;
}

function padeLeftZero(str) {
  return ('00' + str).substr(str.toString().length);
}
