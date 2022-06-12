const { EventEmitter } = require('events')

const e = new EventEmitter()

e.once('helloWorld', (text) => {
    console.log('Evento emitido, escutado e executado', text)
})

e.emit('helloWorld', 'Primeiro')
e.emit('helloWorld', 'Segundo')
e.emit('helloWorld', 'Terceiro')