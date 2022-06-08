const flagsValue = require('./get')

const nameOne = flagsValue.name
const saudation = flagsValue.greeting

console.log(`Olá ${nameOne}, ${saudation}`)