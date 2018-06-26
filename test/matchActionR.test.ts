/**
 * Created by tushar on 26/06/18
 */

import * as assert from 'assert'
import {matchActionR} from '../src/matchActionR'
import {action} from 'action-type'

describe('matchActionR', () => {
  it('should call the most matching update function', () => {
    const actual = matchActionR({
      add: (a: number, b: number) => a + b,
      mul: (a: number, b: number) => a * b
    })(action('add', 10), 20)
    const expected = 30

    assert.strictEqual(actual, expected)
  })

  it('should return original state', () => {
    const actual = matchActionR({
      add: (a: number, b: number) => a + b,
      mul: (a: number, b: number) => a * b
    })(action('div', 10), 20)
    const expected = 20

    assert.strictEqual(actual, expected)
  })

  it('should be curried', () => {
    const actual = matchActionR({
      add: (a: number, b: number) => a + b,
      mul: (a: number, b: number) => a * b
    })(action('add', 10))(20)
    const expected = 30
    assert.strictEqual(actual, expected)
  })
})
