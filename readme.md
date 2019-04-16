# subtract-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/subtract-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/subtract-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/subtract-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/subtract-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/subtract-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/subtract-timeframe)

> Decrement date by timeframe

## Install

```shell
npm install @strong-roots-capital/subtract-timeframe
```

## Use

```typescript
import subtractTimeframe from '@strong-roots-capital/subtract-timeframe'

const date = new Date()

console.log(date)
//=>2019-04-15T03:57:54.654Z

console.log(subtractTimeframe('4H', date))
//=>2019-04-14T23:57:54.654Z

```

## Related

- [add-timeframe](https://github.com/strong-roots-capital/add-timeframe)
- [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)
