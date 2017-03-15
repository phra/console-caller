'use strict'

const test = require('tap').test
const consoleCaller = require('../')
const regex = /Test.test \(.*tests\/test.js/

const consoleMock = {
    log(...args){ return args },
    info(...args){ return args },
    trace(...args){ return args },
    debug(...args){ return args },
    warn(...args){ return args },
    error(...args){ return args },
    table(...args){ return args },
    count(...args){ return args },
    time(...args){ return args },
    assert(...args){ return args },
}

test('console-caller log works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.log('test')), 'caller property matches the test regex')
})

test('console-caller info works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.info('test')), 'caller property matches the test regex')
})

test('console-caller trace works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.trace('test')), 'caller property matches the test regex')
})

test('console-caller debug works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.debug('test')), 'caller property matches the test regex')
})

test('console-caller warn works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.warn('test')), 'caller property matches the test regex')
})

test('console-caller error works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.error('test')), 'caller property matches the test regex')
})

test('console-caller table works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.table('test')), 'caller property matches the test regex')
})

test('console-caller time works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.time('test')), 'caller property matches the test regex')
})

test('console-caller assert works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.assert('test')), 'caller property matches the test regex')
})

test('console-caller table works', (test) => {
  const consoleCallerInstance = consoleCaller(consoleMock)
  test.plan(1)
  test.ok(regex.test(consoleCallerInstance.log('test')), 'caller property matches the test regex')
})
