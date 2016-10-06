var chai = require('chai')
var expect = chai.expect
var samples = require('./interval-samples')
var Interval = require('../src/index')
var rawInterval = require('../src/raw-interval')
var cast = require('../src/cast')(Interval)

describe('cast', function () {
    describe('when is a raw interval', function () {
        var interval
        beforeEach(function () {
            interval = cast(samples['(2, 7)'])
        })
        it('element returned wraps the raw interval', function () {
            expect(interval).to.be.deep.equal(samples['(2, 7)'])
        })
        it('interval passed and interval returned does not have the same reference', function () {
            expect(interval).to.not.be.equal(samples['(2, 7)'])
        })
    })

    describe('when is a string', function () {
        it('element returned wraps a correct raw interval', function () {
            var interval = cast('[3, 9)')
            expect(interval).to.be.deep.equal(samples['[3, 9)'])
        })
    })

    describe('when is Interval instance', function () {
        it('element returned wraps a correct raw interval', function () {
            var interval = new Interval('[4, 5]')
            expect(rawInterval(interval)).to.be.deep.equal(samples['[4, 5]'])
        })
    })

    describe('when type of value is impossible to cast', function () {
        it('param is the same reference as result', function () {
            var param = {foo: 'bar'}
            var result = cast(param)
            expect(result).to.be.equal(param)
        })
    })
})
