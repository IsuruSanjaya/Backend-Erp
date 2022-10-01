"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeliveryItems_1 = __importDefault(require("../../../models/delivery_order/Items/DeliveryItems"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 *
 * @param __req deliveryItem
 * @param __res
 * @returns
 */
const __createDeliveryItem = (__req, __res) => {
    const deliveryItems = new DeliveryItems_1.default({
        __id: mongoose_1.default.Types.ObjectId(),
        itemName: __req.body.itemName,
        quantity: __req.body.quantity,
        unitPrice: __req.body.unitPrice,
        unitDiscount: __req.body.unitDiscount,
        unitTax: __req.body.unitTax,
        deliveryOrder: __req.body.deliveryOrder,
        unitTaxAmount: __req.body.unitTaxAmount,
        status: __req.body.status,
        companyId: __req.body.companyId,
        createAt: __req.body.createAt
    });
    return deliveryItems
        .save().then((newDeliveryItem) => {
        return __res.status(200).json({
            success: true,
            message: 'Successfully created',
            DeliveryItems: newDeliveryItem,
        });
    }).catch((err) => {
        __res.status(500).json({
            success: false,
            message: 'Not Success',
            err: err.message,
        });
    });
};
/**
 *
 * @param __req deliveryItem
 * @param __res
 * @returns
 */
const __updateDeliveryItem = (__req, __res) => {
    const deliveryItems = {
        itemName: __req.body.itemName,
        quantity: __req.body.quantity,
        unitPrice: __req.body.unitPrice,
        unitDiscount: __req.body.unitDiscount,
        unitTax: __req.body.unitTax,
        deliveryOrder: __req.body.deliveryOrder,
        unitTaxAmount: __req.body.unitTaxAmount,
        status: __req.body.status,
        updateAt: __req.body.updateAt
    };
    DeliveryItems_1.default.findByIdAndUpdate(__req.params.id, { $set: deliveryItems }, { new: true }, (err, doc) => {
        return __res.status(200).json({
            success: true,
            message: 'Updated',
        });
    }).catch((err) => {
        __res.status(500).json({
            success: false,
            message: 'Not deleted',
            err: err.message,
        });
    });
};
/**
 *
 * @param __req deliveryItem
 * @param __res
 * @returns
 */
const __getAllItems = (__req, __res) => {
    const companyId = __req.params.companyId;
    const page = parseInt(__req.params.page);
    const pageSize = parseInt(__req.params.pageSize);
    return DeliveryItems_1.default.find({ status: 1, companyId: companyId }, {})
        .skip(page * pageSize).limit(pageSize)
        .then((item) => __res.status(200).json({ item }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req deliveryItem
 * @param __res
 * @returns
 */
const __deleteDeliveryItems = (__req, __res) => {
    const __id = __req.params.id;
    return DeliveryItems_1.default.findByIdAndDelete(__id)
        .then(() => __res.status(200).json({ success: true }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req deliveryItem
 * @param __res
 * @returns
 */
const __getById = (__req, __res) => {
    const __id = __req.params.id;
    const status = __req.params.status;
    const companyId = __req.params.companyId;
    return DeliveryItems_1.default.findOne({ _id: __id, status: status, companyId: companyId }, {})
        .then((item) => __res.status(200).json({ item }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req
 * @param __res
 * @returns
 */
const __statusChange = (__req, __res) => {
    const id = __req.params.id;
    const status = __req.params.status;
    return DeliveryItems_1.default.findByIdAndUpdate(id, { status: status }, { new: true }, (err, doc) => {
        return __res.status(200).json({ message: true });
    }).catch((err) => {
        __res.status(500).json({ err: err.message });
    });
};
/**
 *
 * @param __req
 * @param __res
 * @returns
 */
const __getAllLov = (__req, __res) => {
    const companyid = parseInt(__req.params.companyid);
    return DeliveryItems_1.default.find({ companyId: companyid }).select('_id itemName')
        .then((item) => __res.status(200).json({ item }))
        .catch((error) => __res.status(500).json({ error }));
};
exports.default = { __deleteDeliveryItems, __createDeliveryItem, __updateDeliveryItem, __getAllItems, __statusChange, __getById, __getAllLov };
