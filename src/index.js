var typeVerify = require('type-verify')
var intervalUtils = require('math.interval-utils')
var cast = require('./cast')
var rawInterval = require('./raw-interval.js')

var isEmpty = intervalUtils.isEmpty
var contains = intervalUtils.contains
var numToInterval = intervalUtils.numToInterval
var union = intervalUtils.union

function Interval (e) {
    var result = cast(Interval)(e)
    if (result === e) {
        throw new Error(e + ' is not castable to Interval')
    }
    Object.defineProperty(this, 'interval', {
        value: result
    })
}

Interval.union = function () {
    var arr = [].map.call(arguments, function (interval) {
        var result = cast(Interval)(interval)
        if (result === interval) {
            throw new Error(interval + ' is not castable to Interval')
        }
        return result
    })

    return union(arr).map(function (interval) {
        return new Interval(interval)
    })
}

Object.defineProperties(Interval.prototype, {
    isEmpty: {
        value: function () {
            return isEmpty(rawInterval(this))
        }
    },

    contains: {
        value: function (e) {
            var a = rawInterval(this)
            var b = typeVerify(e, ['Number']) ? numToInterval(e) : cast(Interval)(e)
            if (b === e) {
                throw new Error(e + ' is not castable to Interval or Number')
            }

            return contains(a, b)
        }
    },

    union: {
        value: function () {
            var intervals = [this]
            intervals.push.apply(intervals, arguments)
            return Interval.union.apply(null, intervals)
        }
    }
})

module.exports = Interval
