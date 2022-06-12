const timer = 5000
const callback = () => console.log('Interval OK')

const interval = setInterval(callback, timer)
clearInterval(interval)