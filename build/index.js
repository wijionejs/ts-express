"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var router_1 = require("./router");
require("./controllers/LoginController");
require("./controllers/IndexController");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_session_1.default)({ keys: ['key1'] }));
app.use(router_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Hello bro');
});
