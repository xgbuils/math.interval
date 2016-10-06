var chai = require('chai')
var expect = chai.expect
var Interval = require('../src/index')
var raw = require('../src/raw-interval')
var samples = require('./interval-samples')

describe('Interval', function () {
    describe('constructor', function () {
        describe('with castable interval parameter', function () {
            var interval = new Interval('(4, 8)')
            it('returns Interval instance', function () {
                expect(interval).to.be.an.instanceOf(Interval)
            })
            it('returns correct interval construction', function () {
                expect(raw(interval)).to.be.deep.equal(samples['(4, 8)'])
            })
        })

        describe('with no castable interval parameter', function () {
            it('throws an error', function () {
                function test () {
                    new Interval(/a+/)
                }
                expect(test).to.throw('/a+/ is not castable to Interval')
            })
        })
    })
    describe('Interval.union()', function () {
        describe('if it is passed an array of castable intervals', function () {
            it('it returns an array with raw intervals that represents the union', function () {
                var intervalList = Interval.union(
                    samples['(4, 8)'],
                    '[3, 5)',
                    new Interval('{-1}')
                )

                expect(intervalList.map(raw)).to.be.deep.equal([
                    samples['{-1}'],
                    samples['[3, 8)']
                ])
            })
        })

        describe('if it is passed an array with no castable interval', function () {
            it('it throws an error', function () {
                function test () {
                    Interval.union(
                        samples['(4, 8)'],
                        5,
                        new Interval('{-1}')
                    )
                }

                expect(test).to.throw('5 is not castable to Interval')
            })
        })
    })

    describe('.union()', function () {
        it('union method works in the same way that static union method', function () {
            var interval1 = new Interval('{-1}')
            var interval2 = samples['(4, 8)']
            var interval3 = '[3, 5)'
            var intervalList = interval1.union(interval2, interval3)

            expect(intervalList.map(raw)).to.be.deep.equal([
                samples['{-1}'],
                samples['[3, 8)']
            ])
        })
    })

    describe('.contains()', function () {
        describe('containing numbers...', function () {
            describe('[-2, -2]', function () {
                it('contains -2', function () {
                    var interval = new Interval('[-2,-2]')
                    expect(interval.contains(-2)).to.be.equal(true)
                })
            })

            describe('[1, 6)', function () {
                it('does not contain 6', function () {
                    var interval = new Interval('[1, 6)')
                    expect(interval.contains(6)).to.be.equal(false)
                })
            })
        })

        describe('containing interval', function () {
            describe('[1, 6)', function () {
                it('contains [1, 6)', function () {
                    var interval = new Interval('[1, 6)')
                    expect(interval.contains(new Interval('[1, 6)'))).to.be.equal(true)
                })
            })

            describe('[-2, -2]', function () {
                it('does not contain [1, 6)', function () {
                    var interval = new Interval('[-2,-2]')
                    expect(interval.contains('[1, 6)')).to.be.equal(false)
                })
            })
        })

        describe('if is passed no Number or Interval', function () {
            it('it throws an error', function () {
                function test () {
                    var interval = new Interval('(3,-2)')
                    interval.contains(/a+/)
                }
                expect(test).to.throw('/a+/ is not castable to Interval or Number')
            })
        })
    })

    describe('.isEmpty', function () {
        it('returns true if is empty interval', function () {
            var interval = new Interval('[2, 0)')
            expect(interval.isEmpty()).to.be.equal(true)
        })

        it('returns false if is not empty interval', function () {
            var interval = new Interval('(2, 7)')
            expect(interval.isEmpty()).to.be.equal(false)
        })
    })
})
