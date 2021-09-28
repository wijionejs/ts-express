"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function requiresAuth(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
    }
    else {
        res.status(403).send('Access denied!');
    }
}
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.getIndex = function (req, res) {
        if (req.session && req.session.isLoggedIn) {
            res.send("\n                <div>\n                <p>You are logged in</p>\n                <a href=\"/logout\">Logout</a>\n</div>\n            ");
        }
        else {
            res.send("\n                <div>\n                <p>You are not logged in</p>\n                <a href=\"/login\">Login</a>\n</div>\n            ");
        }
    };
    IndexController.prototype.getSecret = function (req, res) {
        res.send('You are on secret page');
    };
    __decorate([
        (0, decorators_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], IndexController.prototype, "getIndex", null);
    __decorate([
        (0, decorators_1.get)('/secret'),
        (0, decorators_1.use)(requiresAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], IndexController.prototype, "getSecret", null);
    IndexController = __decorate([
        (0, decorators_1.controller)('')
    ], IndexController);
    return IndexController;
}());
