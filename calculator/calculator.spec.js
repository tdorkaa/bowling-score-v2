const calculate = require('./calculator');

describe('calculator', function () {
    it('should return 0 in case all the frames are 0', function () {
        expect(calculate([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(0);
    });

    it('should return 1 in case the 1st roll is 1 and all the others are 0', function () {
        expect(calculate([[1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(1);
    });

    describe('in case of spare', function () {
        it('should return 18 in case the 1st frame is a spare and the 3rd roll is 4', function () {
            expect(calculate([[1, '/'], [4, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(18);
        });
    });
});