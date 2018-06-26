/**
 * Created by tushar on 26/06/18
 */

import * as assert from 'assert'
import {concatC} from '../src/concatC'
import {action, List} from 'action-type'
import {curry2} from 'ts-curry'

describe('concatC', () => {
  it('should combine multiple command functions into one', () => {
    const actual = concatC(
      curry2((a: number, b: number) => action('+', a + b)),
      curry2((a: number, b: number) => action('*', a * b))
    )(1, 2)

    const expected = List(action('+', 3), action('*', 2))
    assert.deepEqual(actual, expected)
  })
  it('should be curried', () => {
    const actual = concatC(
      (a: number, b: number) => action('+', a + b),
      (a: number, b: number) => action('*', a * b)
    )(1)(2)
    const expected = List(action('+', 3), action('*', 2))t
    assert.deepEqual(actual, expected)
  })
})
