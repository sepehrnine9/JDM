"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.getObjectByValue = function (array, key) {
        array.forEach(function (element) {
            return element[key] === key;
        });
    };
    ;
    return Helper;
}());
exports.Helper = Helper;
