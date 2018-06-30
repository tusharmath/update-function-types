/**
 * Created by tushar on 25/06/18
 */
import {curry2} from 'ts-curry'
import {action, Action} from 'action-type'
import * as assert from 'assert'
import {concatR} from '../src/concatR'

describe('concatR', () => {
  const TEST_ACTION = action('SAMPLE', 100)
  it('should combine multiple reducers into one', () => {
    const r0 = (a: Action<number>, b: number) => a.value + b
    const r1 = (a: Action<number>, b: number) => a.value * b
    const r = concatR(r0, r1)
    const actual = r(TEST_ACTION, 20)
    const expected = 100 * (100 + 20)
    assert.equal(actual, expected)
  })
  it('should combine multiple curried reducers into one', () => {
    const r0 = curry2((a: Action<number>, b: number) => a.value + b)
    const r1 = curry2((a: Action<number>, b: number) => a.value * b)
    const r = concatR(r0, r1)
    const actual = r(TEST_ACTION, 20)
    const expected = 100 * (100 + 20)
    assert.equal(actual, expected)
  })
  it('should return a curried function', () => {
    const r0 = curry2((a: Action<number>, b: number) => a.value + b)
    const r1 = curry2((a: Action<number>, b: number) => a.value * b)
    const r = concatR(r0, r1)
    const actual = r(TEST_ACTION)(20)
    const expected = 100 * (100 + 20)
    assert.equal(actual, expected)
  })
})
