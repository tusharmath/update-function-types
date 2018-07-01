/**
 * Created by tushar on 26/06/18
 */

import {List, Action, isList, Nil} from 'action-type'
import {CommandFunction} from './CommandFunction'
import {CurriedFunction2, curry2} from 'ts-curry'

const safeInsert = <T>(result: Array<Action<T>>, item: Action<T>) => {
  if (item !== Nil) result.push(item)
}
export const concatC = <Input, State, Output>(
  ...t: Array<CommandFunction<Input, State, Output>>
): CurriedFunction2<Input, State, Action<any>> =>
  curry2((input: Input, state: State) => {
    const result: Array<Action<Output>> = []
    for (let i = 0; i < t.length; i++) {
      const item = t[i](input, state)
      if (isList(item)) {
        for (let i = 0; i < item.value.length; i++) {
          safeInsert(result, item.value[i])
        }
      } else {
        safeInsert(result, item)
      }
    }

    return result.length === 0
      ? Nil
      : result.length === 1
        ? result[0]
        : List(...result)
  })
