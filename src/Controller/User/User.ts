import express from "express";
import userService from "../../service/user/UserService";
import extractJWT from "../../middleware/extractJWT";
const router = express.Router();


router.get("/",userService.test)
router.get("/validate", extractJWT,userService.validateToken);
router.post("/register",userService.register);
router.post("/login",userService.login);
router.get("/get-all-users",extractJWT, userService.getAllUsers);

export = router