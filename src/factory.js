function IntervalFactory (IntervalClass) {
    return function (rawInterval, interval) {
        if (!(interval instanceof IntervalClass)) {
            interval = Object.create(IntervalClass.prototype)
        }
        Object.defineProperty(interval, 'interval', {
            value: rawInterval
        })
        return interval
    }
}

module.exports = IntervalFactory
