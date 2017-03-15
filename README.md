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
This is the most basic way to use this tool.

```javascript
require('console-caller')()
// All console calls will be intercepted.
```

## Dynamically load console-caller
It's better if we include this tool only when developing, since it's not useful in a production environment.

```javascript
const console = process.env.NODE_ENV === 'development' ? require('console-caller')() : ((typeof window !== 'undefined' && window.console) || (typeof global !== 'undefined' && global.console))
// All console calls will be intercepted when in development environment.
```

## Per file usage
You can also configure `console-caller` to track only console calls for certain files in this way.

```javascript
const console = require('console-caller')(Object.assign(Object.create(null), global.console))
// Placed on top of a file, it will only track the calls in that file.
```

## Change stack trace offset
If you are using some abstractions between your logging functions and the real call to console APIs, you can set an arbitrary offset when splitting the stack trace. In this way you can also use this utility when a custom library is used for logging.

```javascript
const console = require('../')(Object.assign({}, ((typeof window !== 'undefined' && window.console) || (typeof global !== 'undefined' && global.console))), 10)
// Note the "10" as second argument. That is the offset of the splitted stack trace
```

## Example

`npm run example` or `yarn run example`

```
╭─phra at debian in /home/phra/git/console-caller (master ✔)
╰─λ yarn run example                                                                                                                                             0 < 13:36:37
yarn run v0.22.0
$ env NODE_ENV=development node examples/example.js 
hi from module!
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:6:9)]}
hi from module! {caller: [module.exports (/home/phra/git/console-caller/examples/module.js:1:94)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:9:9)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:10:9)]}
example {caller: [Object.<anonymous> (/home/phra/git/console-caller/examples/example.js:11:9)]}
Done in 0.17s.

```
