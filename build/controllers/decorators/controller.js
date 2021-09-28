"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var router_1 = require("../../router");
function controller(prefix) {
    return function (target) {
        var router = router_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            if (target.prototype.hasOwnProperty(key)) {
                var path = Reflect.getMetadata('path', target.prototype, key);
                var method = Reflect.getMetadata('method', target.prototype, key);
                var middleware = Reflect.getMetadata('middleware', target.prototype, key) || [];
                console.log(middleware);
                router[method].apply(router, __spreadArray(__spreadArray([prefix + path], middleware, false), [target.prototype[key]], false));
            }
        }
    };
}
exports.controller = controller;
