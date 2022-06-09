const flagsValue = require('./get')

const nameOne = flagsValue.name
const saudation = flagsValue.greeting

const nameTwo = flagsValue.flagName
const saudFlag = flagsValue.flagGreeting

console.log(`Olá ${nameOne}, ${saudation}`)
console.log(`Olá ${nameTwo}, ${saudFlag}`)