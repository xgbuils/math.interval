var intervalUtils = require('math.interval-utils')
var isRawInterval = intervalUtils.isInterval
var rawInterval = require('./raw-interval.js')
var parseInterval = require('./parser')

module.exports = function (Interval) {
    return function (value) {
        var interval
        if (typeof value === 'string') {
            interval = parseInterval(value)
        } else if (isRawInterval(value)) {
            interval = [value[0], value[1]]
        } else if (value instanceof Interval) {
            interval = rawInterval(value)
        } else {
            return value
        }
        return interval
    }
}
