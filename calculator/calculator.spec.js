const calculate = require('./calculator');

describe('calculator', function () {
    it('should return 0 in case all the frames are 0', function () {
        expect(calculate([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(0);
    });
});