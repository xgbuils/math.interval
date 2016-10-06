module.exports = {
    '{-1}': [{
      // exactly -1
        value: -1,
        limit: 0
    }, {
      // exactly -1
        value: -1,
        limit: 0
    }],

    '(2, 7)': [{
        value: 2,
        limit: 1
    }, {
        value: 7,
        limit: -1
    }],

    '[3, 8)': [{
        value: 3,
        limit: 0
    }, {
        value: 8,
        limit: -1
    }],

    '[3, 9)': [{
        value: 3,
        limit: 0
    }, {
        value: 9,
        limit: -1
    }],

    '(3, 11]': [{
        value: 3,
        limit: 1
    }, {
        value: 11,
        limit: 0
    }],

    '[4, 5]': [{
        value: 4,
        limit: 0
    }, {
        value: 5,
        limit: 0
    }],

    '(4, 8)': [{
      // 4 + infinitesimal
        value: 4,
        limit: 1
    }, {
      // 8 - infinitesimal
        value: 8,
        limit: -1
    }],

    '{5}': [{
      // exactly 5
        value: 5,
        limit: 0
    }, {
      // exactly 5
        value: 5,
        limit: 0
    }],

    '{7}': [{
      // exactly 7
        value: 7,
        limit: 0
    }, {
      // exactly 7
        value: 7,
        limit: 0
    }]
}
