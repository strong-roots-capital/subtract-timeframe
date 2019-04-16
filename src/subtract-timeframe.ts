/**
 * subtract-timeframe
 * Decrement date by timeframe
 */

const debug = require('debug')('subtract-timeframe')

import ow from 'ow'
import moment from 'moment'
import session from 'market-session'
import durationOfTimeframe from '@strong-roots-capital/duration-of-timeframe'
import { inTradingviewFormat, isTradingviewFormatWeeks } from '@strong-roots-capital/is-tradingview-format'


/**
 * Subtract `timeframe` from `date` and return the result.
 *
 * @param timeframe - Timeframe by which to decrement `date`,
 * expressed in TradingView format
 * @param date - Date to decrement
 * @returns `date` decremented by `timeframe`
 */
export default function subtractTimeframe(timeframe: string, date: Date): Date {

    ow(date, ow.date)
    ow(timeframe, ow.string.is(inTradingviewFormat))

    const normalizedTimeframe = session.toString(session.fromString(timeframe))
    const quantifier = parseInt(normalizedTimeframe)

    const incremented = moment.utc(date)
    isTradingviewFormatWeeks(timeframe)
        ? incremented.subtract(quantifier * 7, 'days')
        : incremented.subtract(quantifier, durationOfTimeframe(timeframe))

    debug(`${date.toISOString()} - ${timeframe} = ${incremented.toISOString()}`)
    return incremented.toDate()
}
