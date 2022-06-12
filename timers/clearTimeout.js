const timer = 3000
const finished = () => console.log("All Done!")

const timeOut = setTimeout(finished, timer)
clearTimeout(timeOut)