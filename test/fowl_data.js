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
        describe('General Fowlness Check', function() {
            it('should be generally fowl', function() {
                var text = 'this is absolute shit';
                var isFowl = fowl.isTextFowl(text).length;

                expect(isFowl > 0).to.be.true;
            });

            it('should not be fowl', function() {
                var text = 'arse';
                var isFowl = fowl.isTextFowl(text).length;

                expect(isFowl > 0).to.be.false;
            });

            it('should be fowl through special characters surrounding the fowl text', function() {
                var text = 'this is absolute @#$%^&*shit!';
                var isFowl = fowl.isTextFowl(text).length;

                expect(isFowl > 0).to.be.true;
            });
        });

        describe('Specific Fowlness Check', function() {
            it('should be fowl and return the expected fowl text surrounded in special chars', function() {
                var text = 'this is absolute @#$%^&*shit!';
                var expectedFowlText = 'shit';
                var fowlText = fowl.isTextFowl(text)[0];

                expect(fowlText).to.be.equal(expectedFowlText);
            });

            it('should be fowl and return expected fowl text both surrounded and non surrounded in special chars', function() {
                var text = 'this is absolute fucking bull @#$%^&*shit!';
                var expectedFowlText = ['fucking', 'shit'];
                var fowlText = fowl.isTextFowl(text);

                // before we iterate, we should just check length equality
                expect(fowlText.length === expectedFowlText.length);

                for(var i = 0; i < fowlText.length; i++) {
                    expect(fowlText[i]).to.be.equal(expectedFowlText[i]);
                }
            });
        });
    });
});
