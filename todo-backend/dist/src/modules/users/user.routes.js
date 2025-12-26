"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const users_controller_1 = require("./users.controller");
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", users_controller_1.userHandler);
//# sourceMappingURL=user.routes.js.map