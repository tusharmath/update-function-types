/**
 * Created by tushar on 25/06/18
 */

/**
 * A curried function that takes in an Action and a State and returns a new Action
 * @param  action
 * @param  state
 * @return action
 */
import {CurriedFunction2} from 'ts-curry'

export type CommandFunction<Input, State, Output> = CurriedFunction2<
  Action<Input>,
  State,
  Action<Output>
>
