'use strict'

const console = process.env.NODE_ENV === 'development' ? require('../')(Object.assign(Object.create(null), global.console)) : ((typeof window !== 'undefined' && window.console) || (typeof global !== 'undefined' && global.console))

require('./module')()
console.log('example')
require('../')() // override console functions globally
require('./module')()
console.log('example')
console.info('example')
console.warn('example')
