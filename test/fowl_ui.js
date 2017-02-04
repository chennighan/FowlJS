/**
 * FowlJS Data Layer Unit Tests
 *
 * @description Responsible for testing the functionality of the FowlJS Event Layer
 * @author Chris Hennighan <chennighan@gmail.com>
 */

describe('Fowl UI', function() {
    it('should expose a fowl.ui object', function() {
        expect(fowl.ui).to.be.an('object');
    });
});
