/**
 * FowlJS Data Layer Unit Tests
 *
 * @description Responsible for testing the functionality of the FowlJS Data Layer
 * @author Chris Hennighan <chennighan@gmail.com>
 */

describe('FowlJS', function() {
    it('should expose a fowljs constructor', function() {
        expect(Fowl).to.be.an('function');
    });

    it('should expose a fowljs object', function() {
        expect(fowl).to.be.an('object');
    });

    describe('Word Fowl', function() {
        it('should be fowl', function() {
            var word = 'ass';
            var isFowl = fowl.isWordFowl(word);

            expect(isFowl).to.be.true;
        });

        it('should not be fowl', function() {
            var word = 'arse';
            var isFowl = fowl.isWordFowl(word);

            expect(isFowl).to.be.false;
        });
    });
});
