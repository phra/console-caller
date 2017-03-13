# console-caller

`console-caller` lets you easily print the call site of console functions. It can be useful in large codebases where there are a lot of logs. Do you want to easily find out which line of your code is printing that thing? This is the right module for you!

## Installation

```
npm i --save-dev console-caller
```
or
```
yarn add --dev console-caller
```

## Basic usage

```javascript
const console = require('../')()
// All console calls will be intercepted.
```

## Advanced usage

```javascript
const console = process.env.NODE_ENV === 'development' ? require('../')(Object.assign(Object.create(null), global.console)) : ((typeof window !== 'undefined' && window.console) || (typeof global !== 'undefined' && global.console))
// Placed on top of a file, it will track only the calls of that file.
```

## Change stack trace offset
If you are using some abstractions between your logging functions and the real call to console APIs, you can set an arbitrary offset when splitting the stack trace. In this way you can also use this utility when a custom library is used for logging.
```javascript
const console = require('../')(Object.assign({}, global.console), 10)
// Note the "10" as second argument. That is the offset of the splitted stack trace
```

## Example

`npm run example` or `yarn run example`

```
[mer15:mar:17 01:46:58] phra@debian-vm ~/git/console-caller $ yarn run example
yarn run v0.21.3
$ node examples/example.js 
hi from module!
example
hi from module! {caller: [module.exports (/home/phra/git/console-caller/examples/module.js:1:94)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:9:9)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:10:9)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:11:9)]}
Done in 0.19s.
```
