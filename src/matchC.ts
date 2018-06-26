/**
 * Created by tushar on 26/06/18
 */

import {Nil} from 'action-type'
import {curry2} from 'ts-curry'
import {CommandFunction} from './CommandFunction'

export type MatchActionCSpec<State> = {
  [key: string]: CommandFunction<any, State, any>
}

export const matchC = <State>(spec: MatchActionCSpec<State>) => {
  return curry2((action: Action<any>, state: State) => {
    if (spec[action.type]) return spec[action.type](action.value, state)
    return Nil
  })
}
