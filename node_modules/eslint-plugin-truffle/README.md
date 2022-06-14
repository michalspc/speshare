# eslint-plugin-truffle
ESLint plugin for Truffle development. 

Provides a custom environment containing Truffle global variables.

## Installation

```
yarn add --dev eslint eslint-plugin-truffle
```

## Usage

In your ESLint config file (ex.: `.eslintrc`), add:

```javascript
{
  // ...
  "env": {
    // ...
    "mocha": true, // for test files
    "truffle/globals": true // same as "truffle/truffle": true
  },
  "plugins": [
    // ...
    "truffle"
    // ...
  ]
  // ...
}
```
