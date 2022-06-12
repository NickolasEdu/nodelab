const timer = 1000
const check = () => console.log('Check')

const interval = setInterval(check, timer)

setTimeout( () => clearInterval(interval), 5000)