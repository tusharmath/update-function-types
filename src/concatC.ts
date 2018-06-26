/**
 * Created by tushar on 26/06/18
 */

import {List} from 'action-type'
import {CommandFunction} from './CommandFunction'
import {curry2} from 'ts-curry'

export const concatC = <Input, State, Output>(
  ...t: Array<CommandFunction<Input, State, Output>>
) =>
  curry2<Input, State, Action<Array<Action<Output>>>>(
    (input: Input, state: State) => {
      const result: Array<Action<Output>> = []
      for (let i = 0; i < t.length; i++) result.push(t[i](input, state))
      return List(...result)
    }
  )