"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"post\">\n        <div>\n        <label> Email\n        <input type=\"text\" name=\"email\">\n        </label>\n</div>\n        <div>\n        <label> Password\n        <input type=\"password\" name=\"password\">\n        </label>\n</div>\n<button>Login</button>\n    </form>\n   ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
});
