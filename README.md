# Interval

Class to work with intervals of real numbers.

## Version
0.1.0

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
interval.contains('[2, 3') // true
interval.union('[8, 9)') // [new Interval('(1, 5)'), new Interval('[8, 9)')]
interval.union('(4, 6])') // [new Interval('(1, 6]')]

var isolatedInterval = new Interval('{3}') // equivalent to [3, 3]
isolatedInterval.isEmpty() // false
interval.contains(isolatedInterval) // true
```

## License
MIT