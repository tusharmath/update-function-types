/**
 * Created by tushar on 25/06/18
 */

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
