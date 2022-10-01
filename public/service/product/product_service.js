"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../../models/product/product"));
const mongoose_1 = __importDefault(require("mongoose"));
//create
const createProduct = (__req, __res) => {
    try {
        const { name, description, manufacturer, supplier, in_stock_amount, unit_price, type } = __req.body;
        const product = new product_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            name,
            description,
            manufacturer,
            supplier,
            in_stock_amount,
            unit_price,
            type
        });
        return product
            .save()
            .then((__product) => __res.status(201).json({ __product }))
            .catch((error) => __res.status(500).json({ error }));
    }
    catch (err) {
        return __res.status(500).json({ error: err });
    }
};
//read
const getOneProduct = (__req, __res) => {
    try {
        const id = __req.params.id;
        return product_1.default.findById(id)
            .then((product) => {
            if (product)
                return __res.status(200).json(product);
            return __res.status(404).json({ message: 'Product not found' });
        })
            .catch((error) => __res.status(500).json(error));
    }
    catch (error) {
        return __res.status(500).json({ error });
    }
};
//read all
const getAllProducts = (__req, __res) => {
    return product_1.default.find()
        .then((__products) => {
        return __res.status(200).json({
            count: __products.length,
            products: __products
        });
    })
        .catch((error) => __res.status(500).json({ error }));
};
//update
const updateProduct = (__req, __res) => {
    const __productId = __req.params.id;
    return product_1.default.findById(__productId)
        .then((product) => {
        if (product) {
            product.set(__req.body);
            return product.save()
                .then(__product => __res.status(201).json({ product: __product }))
                .catch(error => __res.status(500).json(error));
        }
        else {
            return __res.status(404).json({ message: "Product not found" });
        }
    })
        .catch((err) => __res.status(500).json({ error: err }));
    return __res.status(200).json({ message: 'success' });
};
//delete
const deleteProduct = (__req, __res) => {
    const __id = __req.params.id;
    return product_1.default.findByIdAndDelete(__id)
        .then(() => __res.status(200).json({ success: true }))
        .catch((error) => __res.status(500).json({ error }));
};
exports.default = {
    createProduct,
    getOneProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};
