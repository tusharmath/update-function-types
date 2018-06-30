/**
 * Created by tushar on 26/06/18
 */

import * as assert from 'assert'
import {concatC} from '../src/concatC'
import {action, List} from 'action-type'
import {curry2} from 'ts-curry'

describe('concatC', () => {
  const P = (a: number, b: number) => action('+', a + b)
  const M = (a: number, b: number) => action('*', a * b)
  const D = (a: number, b: number) => action('/', a / b)
  it('should combine multiple command functions into one', () => {
    const actual = concatC(curry2(P), curry2(M))(1, 2)
    const expected = List(action('+', 3), action('*', 2))

    assert.deepEqual(actual, expected)
  })

  it('should be curried', () => {
    const actual = concatC(P, M)(1)(2)
    const expected = List(action('+', 3), action('*', 2))

    assert.deepEqual(actual, expected)
  })

  it('should be associative', () => {
    const a = concatC(concatC(P, M), D)
    const b = concatC(P, concatC(M, D))
    assert.deepEqual(a(1, 2), b(1, 2))
  })
})
