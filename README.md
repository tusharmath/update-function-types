# Update Function Types

Provides a specification and basic type classes for update function.
Essentially there are two kinds of update functions —

1.  `ReducerFunction`: takes in `action` and `state` and returns a new `state`.
2.  `CommandFunction`: takes in `action` and `state` and return a new `action`.

# Index

- [Types](#types)
  - [ReducerFunction](#reducer-function)
  - [CommandFunction](#command-function)
- [Library Functions](#library-functions)
  - [concatR](#concatr)
  - [concatC](#concatc)

# Types

## Reducer Function

1.  Takes two arguments viz. `Value` and `State`.
2.  Always return a `State`.
3.  Does not mutate the original objects provided.

```ts
export type ReducerFunction<Value, State> = {
  (value: Value, state: State): State
}
```

## Command Function

1.  Takes two arguments only viz. `Value` and `State`.
2.  Always returns an `Action`. It can consider returning **[Nil]** if no meaningful value is intended.
3.  Does not mutate the original objects provided.

```ts
export type CommandFunction<Value, State, Output> = {
  (value: Value, state: State): Action<Output>
}
```

[nil]: https://github.com/tusharmath/action-type#nil

# Library Functions

## concatR

Takes in multiple `ReducerFunction`(s) as arguments and returns a new `ReducerFunction` as a result.

Consider the `ReducerFunction`(s) `R0` `R1` then two statements will be logically equivalent —

1.  `concatR(R0, R1)(action, state)`
2.  `R1(action, R0(action, state))`

**Usage**

```ts
import {concatR} from 'update-function-type'

const R0 = (a, b) => a + b
const R1 = (a, b) => a * b

concatR(R0, R1)(10, 20) // 10 * (10 + 20) === 300
```

## concatC

Takes in multiple `CommandFunction`(s) as arguments and returns a new `CommandFunction` as a result.
Consider the `CommandFunction`(s) `C0` `C1` then two statements will be logically equivalent —

1.  `concatC(C0, C1)(action, state)`
2.  `List(C0(action, state), C1(action, state))`

**Usage**

```ts
import {concatC} from 'update-function-type'

const C0 = (a, b) => action('+', a + b)
const C1 = (a, b) => action('*', a * b)

concatC(C0, C1)(10, 500) // List(action('+', 510), action('B', 5000))
```
