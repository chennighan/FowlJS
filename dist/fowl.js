(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * FowlJS Data Layer
 *
 * Responsible for processing data and returning results.
 *
 */

function FowlJS() {
    var instance = this;
    return this;
}

fowljs = new FowlJS();
},{}],2:[function(require,module,exports){
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
},{}]},{},[1,2]);
