# @meitner/eslint-plugin

Custom ESLint rules used internally at Meitner

## Rules

### no-inline-function-parameter-type-annotation

Writing type annotations inline for function parameters makes the code harder to read, and introduces inconsistency. This rule forces the developer to write a type or interface.

Examples of valid code

```js
const myFunction = (parameterA: MyType) => {};
function myFunction(parameterA: MyType) {}
const myFunction = (parameterA: string) => {};
function myFunction(parameterA: string) {}
```

Examples of invalid code

```js
const myFunction = (parameterA: { foo: string }) => {};
function myFunction(parameterA: { foo: string }) {}
```

### no-mixed-exports

Mixed exports refers to a file having both a default and one or more named exports.

Mixing exports can make the code hard to navigate and unpredictable. This rule forbids mixing exports.

Examples of valid code

```js
// types.ts
export type Options = {
    value: number
};

// index.ts
import { Options } from "./types.ts";

export default myFunction(parameters: Options) {...}
```

Examples of invalid code

```js
// index.ts
export type Options = {
    value: number
};

export default myFunction(parameters: Options) {...}
```
