/**
 * Created by tushar on 26/06/18
 */

import {curry2} from 'ts-curry'
import {ReducerFunction} from './ReducerFunction'

export type MatchActionRSpec<State> = {
  [key: string]: ReducerFunction<any, State>
}

export const matchR = <State>(spec: MatchActionRSpec<State>) =>
  curry2<Action<any>, State, State>(
    (action: Action<any>, state: State) =>
      spec[action.type] ? spec[action.type](action.value, state) : state
  )
