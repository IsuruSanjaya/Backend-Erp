"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UserService_1 = __importDefault(require("../../service/user/UserService"));
const extractJWT_1 = __importDefault(require("../../middleware/extractJWT"));
const router = express_1.default.Router();
router.get("/", UserService_1.default.test);
router.get("/validate", extractJWT_1.default, UserService_1.default.validateToken);
router.post("/register", UserService_1.default.register);
router.post("/login", UserService_1.default.login);
router.get("/get-all-users", extractJWT_1.default, UserService_1.default.getAllUsers);
module.exports = router;
