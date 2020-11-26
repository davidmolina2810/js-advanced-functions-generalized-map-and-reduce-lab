const map = (arr, func) => {
  let newArr = []
  arr.forEach(el => {
    newArr.push(func(el))
  })
  return newArr
}

const reduce = (arr, func, start) => {
  let x = (!!start) ? start : arr[0]
  let i = (!!start) ? 0 : 1
  
  for (; i < arr.length; i++) {
    x = func(x, arr[i])
  }

  return x 
}