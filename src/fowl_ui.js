/**
 * FowlJS Event Layer
 *
 * @description Responsible for processing input from the client side via selector passed in. With
 * the received data, the Event Layer will query the data layer for processing the data
 * and returning the result.
 * @author Chris Hennighan <chennighan@gmail.com>
 */

(function(fowl) {
    function FowlUI() {
        return this;
    }

    fowl.ui = new FowlUI();
}(fowl));
