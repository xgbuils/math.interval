# Interval

Class to work with intervals of real numbers.

## Version
0.1.1

## Install
``` bash
npm install math.interval
```

## Usage
``` javascript
var Interval = require('math.interval')

var interval = new Interval('(1, 5)')

interval.isEmpty() // false
interval.contains(4) // true
interval.contains('[2, 3)') // true
interval.union('[8, 9)') // [new Interval('(1, 5)'), new Interval('[8, 9)')]
interval.union('(4, 6])') // [new Interval('(1, 6]')]

var isolatedInterval = new Interval('{3}') // equivalent to [3, 3]
isolatedInterval.isEmpty() // false
interval.contains(isolatedInterval) // true
```

## API

### Interval
#### constructor(interval)

Constructor creates an instance of Interval class. it throws an exception if `interval` is not [IntervalCastable](#intervalcastable)

#### Interval#isEmpty()

It returns true or false if interval is empty or not.

Example:
``` javascript
var Interval = require('math.interval')

var new Interval('[2, 4)')

interval.isEmpty() // returns false
```

#### Interval#contains(interval)
It returns `true` or `false` if instance contains `interval` passed by parameter. `contains` throws an exception if `interval` is not [IntervalCastable](#intervalcastable)

Example:
``` javascript
var Interval = require('math.interval')

var interval = new Interval('[1, 3)')

interval.contains('(1, 2)') // returns true
interval.contains(new Interval('[5, 6]')) // returns false
```

#### Interval#union(...intervals)
It returns an array of minimum disjoint intervals that represents the union of instance of interval with `intervals` passed by parameter.

``` javascript
var Interval = require('math.interval')

var interval = new Interval('[1, 3)')

interval.union('(2, 4)', '{5}', '(5, 6)')
// returns [new Interval('[1, 4)'), new Interval('[5, 6)')]
```

#### Interval.union(...intervals)
Interval also has static method that calculates the union of intervals in the same way as `union` method.

``` javascript
var Interval = require('math.interval')

Interval.union('[1, 3)', '(2, 4)', '{5}', '(5, 6)')
// returns [new Interval('[1, 4)'), new Interval('[5, 6)')]
```

#### Interval#toString()
It returns an string with a expression representation of interval

``` javascript
var Interval = require('math.interval')

var a = new Interval('(2, 5]')
var b = new Interval('(5, 2]') // empty
var c = new Interval('[2, 2]') // singleton interval

a.toString() // '(2, 5]'
b.toString() // '{}'
c.toString() // '{2}'
```

### IntervalCastable
A value is IntervalCastable if it is one of this list of types:
- instance of `Interval`.
- string that parses with interval (`'[2, 5]'`, `'[0, 5)'`, `'{3}'`, `'(-2, 1)'`, etc).
- [data structure](https://github.com/xgbuils/math.interval-utils) defined in `math.interval-utils` package.

### Exported functions

#### rawInterval(interval)
It converts Interval instance to interval [data structure](https://github.com/xgbuils/math.interval-utils) defined in `math.interval-utils` package. It is posible to import this function thus:

``` javascript
var rawInterval = require('math.interval/src/raw-interval.js')
```

#### cast(interval)
It converts IntervalCastable value to interval [data structure](https://github.com/xgbuils/math.interval-utils) defined in `math.interval-utils` package. It is posible to import this function thus:

``` javascript
var rawInterval = require('math.interval/src/cast.js')
```

## LICENSE
MIT
