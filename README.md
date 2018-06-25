# Update Function Types

Provides a specification and basic type classes for update function.

# Types

- [ReducerFunction](#reducer-function)
- [CommandFunction](#command-function)

## Reducer Function

1.  Takes two arguments viz. `Action` and `State`.
2.  Always return a `State`.
3.  Does not mutate the original objects provided.
4.  Is curried.

```ts
export type ReducerFunction<Value, State> = {
  (action: Action<Value>, state: State): State
  (action: Action<Value>): {(state: State): State}
}
```

## Command Function

1.  Takes two arguments only viz. `Action` and `State`.
2.  Always returns an `Action`.
3.  Does not mutate the original objects provided.

```ts
export type CommandFunction<Input, State, Output> = {
  (action: Action<Input>, state: State): Action<Output>
  (action: Action<Input>): {(state: State): Action<Output>}
}
```
