/**
 * Created by tushar on 25/06/18
 */

///<reference path="node_modules/action-type/global.d.ts"/>

import {CurriedFunction2} from 'ts-curry'

/**
 * A curried function that takes in an Action and a State and returns a new state
 * @param  action
 * @param  state
 * @return state
 */
export type ReducerFunction<Value, State> = CurriedFunction2<
  Action<Value>,
  State,
  State
>

/**
 * A curried function that takes in an Action and a State and returns a new Action
 * @param  action
 * @param  state
 * @return action
 */
export type CommandFunction<Input, State, Output> = CurriedFunction2<
  Action<Input>,
  State,
  Action<Output>
>
