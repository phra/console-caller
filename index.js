'use strict'

const OFFSET = process && process.version[1] > 6 ? 3 : 4
const consoleCaller = (console = ((typeof window !== 'undefined' && window.console) || (typeof global !== 'undefined' && global.console)), LINE_OFFSET = OFFSET) => {
  const functionsKeys = Object.keys(console).filter(k => typeof console[k] === 'function')
  const COLUMN_OFFSET = 7
  const getStackFactory = () => `[${Error().stack.split('\n')[LINE_OFFSET].substr(COLUMN_OFFSET)}]`
  const functions = functionsKeys.reduce((acc, el) => {
    acc[el] = console[el]
    return acc
  }, Object.create(null))

  functionsKeys.forEach(k => {
    switch (k) {
      case 'log':
      case 'info':
      case 'trace':
      case 'debug':
      case 'warn':
      case 'error':
        console[k] = (...args) => {
          args = [...args, `{caller: ${getStackFactory()}}`]
          return functions[k].apply(console, args)
        }
      break
      case 'table':
        console[k] = (...args) => {
          return functions.log(`{caller: ${getStackFactory()}}`) || functions[k].apply(console, args)
        }
      break
      case 'count':
      case 'time':
        console[k] = (...args) => {
          args[0] = `${args[0] || ''} {caller: ${getStackFactory()}}`
          return functions[k].apply(console, args)
        }
      break
      case 'assert':
        console[k] = (...args) => {
          args[1] = `${args[1] || ''} {caller: ${getStackFactory()}}`
          return functions[k].apply(console, args)
        }
      break
    }
  })

  return console
}

module.exports = consoleCaller
