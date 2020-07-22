"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeBefore = void 0;
var rxjs_1 = require("rxjs");
function executeBefore(action) {
    return function (source) {
        return new rxjs_1.Observable(function (observer) {
            action();
            return source.subscribe(observer);
        });
    };
}
exports.executeBefore = executeBefore;
