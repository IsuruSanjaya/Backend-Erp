"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const extractJWT_1 = __importDefault(require("../../middleware/extractJWT"));
const product_service_1 = __importDefault(require("../../service/product/product_service"));
const router = (0, express_1.Router)();
router.get("/get-products", extractJWT_1.default, product_service_1.default.getAllProducts);
router.get("/get-product/:id", extractJWT_1.default, product_service_1.default.getOneProduct);
router.post("/create-product", extractJWT_1.default, product_service_1.default.createProduct);
router.put("/update-product/:id", extractJWT_1.default, product_service_1.default.updateProduct);
router.delete("/delete-product/:id", extractJWT_1.default, product_service_1.default.deleteProduct);
module.exports = router;
