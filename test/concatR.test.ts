/**
 * Created by tushar on 25/06/18
 */
import {CurriedFunction2, curry2} from 'ts-curry'
import {action} from 'action-type'
import * as assert from 'assert'
import {concatR} from '../src/concatR'

describe('concatR', () => {
  const TEST_ACTION = action('SAMPLE', 100)
  it('should combine multiple reducers into one', () => {
    const r0 = curry2((a: Action<number>, b: number) => a.value + b)
    const r1 = curry2((a: Action<number>, b: number) => a.value * b)
    const r = concatR(r0, r1)
    const actual = r(TEST_ACTION, 20)
    const expected = 100 * (100 + 20)
    assert.equal(actual, expected)
  })

  // test for TSC compiler
  it('should work with curried functions', () => {
    const r0 = curry2((a: Action<number>, b: number) => a.value + b)
    const r1 = curry2((a: Action<number>, b: number) => a.value * b)
    concatR(r0, r1)
  })

  // test for TSC compiler
  it('returns a curried function', () => {
    const r0 = curry2((a: Action<number>, b: number) => a.value + b)
    const r1 = curry2((a: Action<number>, b: number) => a.value * b)
    const curried = concatR(r0, r1)

    curried(TEST_ACTION)(100)
  })

  // test for TSC compiler
  it('is strictly typed', () => {
    const r0 = curry2(
      (a: Action<number>, b: Date) => new Date(a.value + b.getDay())
    )
    const r1 = curry2(
      (a: Action<number>, b: Date) => new Date(a.value * b.getDay())
    )
    const curried: CurriedFunction2<Action<number>, Date, Date> = concatR(
      r0,
      r1
    )

    curried(TEST_ACTION, new Date())
    curried(TEST_ACTION)(new Date())
  })
})
