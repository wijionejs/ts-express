"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.put = exports.get = exports.post = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
function bindMethod(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.post = bindMethod(Methods_1.Methods.post);
exports.get = bindMethod(Methods_1.Methods.get);
exports.put = bindMethod(Methods_1.Methods.put);
exports.patch = bindMethod(Methods_1.Methods.patch);
exports.del = bindMethod(Methods_1.Methods.del);
