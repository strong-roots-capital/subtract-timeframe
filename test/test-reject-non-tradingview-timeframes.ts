import test from 'ava'


/**
 * Library under test
 */

import subtractTimeframe from '../src/subtract-timeframe'

test('should reject non-TradingView timeframes', t => {
    const error = t.throws(() => {
        subtractTimeframe('1Y', new Date())
    })
    t.is(error.name, 'ArgumentError')
})
