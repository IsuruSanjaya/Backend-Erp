import { Router } from "express";
import extractJWT from "../../middleware/extractJWT";
import productService from "../../service/product/product_service";

const router = Router()

router.get("/get",productService.getAllProducts);
router.get("/get/:id",productService.getOneProduct);
router.post("/create-product",productService.createProduct);;
router.put("/update-product/:id",productService.updateProduct);
router.delete("/delete-product/:id",productService.deleteProduct);
export = router; 