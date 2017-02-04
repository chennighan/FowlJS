/**
 * FowlJS Event Layer
 *
 * Responsible for processing input from the client side via selector passed in. With
 * the received data, the Event Layer will query the data layer for processing the data
 * and returning the result.
 *
 */

(function(fowljs) {
    function FowlJsUI() {
        return this;
    }

    fowljs.ui = new FowlJsUI();
}(fowljs));