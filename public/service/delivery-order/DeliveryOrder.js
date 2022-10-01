"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeliveryOrder_1 = __importDefault(require("../../models/delivery_order/DeliveryOrder"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 *
 * @param __req deliveryOrder
 * @param __res
 * @returns
 */
const __createDeliveryOrder = (__req, __res) => {
    try {
        const { date, transactionDate, orderNumber, referenceNumber, transactionType, orderSource, deliveryType, vehicleNumber, coustomer, customerType, salesPerson, salesOrder, purchaseOrder, shippingAddress, totalBuill, status, companyId, createAt } = __req.body;
        const d = new Date(date.split("-")[0], date.split("-")[1], date.split("-")[2]);
        const transaction_date = new Date(transactionDate.split("-")[0], transactionDate.split("-")[1], transactionDate.split("-")[2]);
        const delivery_order = new DeliveryOrder_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            date: d,
            transactionDate: transaction_date,
            orderNumber,
            referenceNumber,
            transactionType,
            orderSource,
            deliveryType,
            vehicleNumber,
            coustomer,
            customerType,
            salesPerson,
            salesOrder,
            purchaseOrder,
            shippingAddress,
            totalBuill,
            status,
            companyId,
            createAt
        });
        return delivery_order
            .save()
            .then((__order) => __res.status(201).json({ __order }))
            .catch((error) => __res.status(500).json({ error }));
    }
    catch (err) {
        return __res.status(500).json({ error: "create order failed" });
    }
};
/**
 *
 * @param __req deliveryOrder
 * @param __res
 * @returns
 */
const __updateDeliveryOrder = (__req, __res) => {
    try {
        const orderId = __req.params.id;
        return DeliveryOrder_1.default.findById(orderId)
            .then((order) => {
            if (order) {
                order.set(__req.body);
                return order
                    .save()
                    .then((__order) => {
                    return __res.status(200).json({ __order });
                })
                    .catch((err) => {
                    return __res.status(500).json({ err });
                });
            }
            else {
                return __res.status(404).send({ error: "order not found" });
            }
        })
            .catch((err) => {
            return __res.status(500).json({ err });
        });
    }
    catch (err) {
        return __res
            .status(500)
            .send({ error: `update deliery order failed ${err}` });
    }
};
/**
 *
 * @param __req deliveryOrder
 * @param __res
 * @returns
 */
const __getAllOrders = (__req, __res) => {
    const companyId = __req.params.companyId;
    const page = parseInt(__req.params.page);
    const pageSize = parseInt(__req.params.pageSize);
    return DeliveryOrder_1.default.find({ status: 1, companyId: companyId }, {})
        .skip(page * pageSize).limit(pageSize)
        .then((orders) => __res.status(200).json({ orders }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req deliveryOrder
 * @param __res
 * @returns
 */
const __deleteDeliveryOder = (__req, __res) => {
    const __id = __req.params.id;
    return DeliveryOrder_1.default.findByIdAndDelete(__id)
        .then(() => __res.status(200).json({ success: true }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req deliveryOrder
 * @param __res
 * @returns
 */
const __getById = (__req, __res) => {
    const __id = __req.params.id;
    const status = __req.params.status;
    const companyId = __req.params.companyId;
    return DeliveryOrder_1.default.findOne({ _id: __id, status: status, companyId: companyId }, {})
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
    return DeliveryOrder_1.default.findByIdAndUpdate(id, { status: status }, { new: true }, (err, doc) => {
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
    //imlement your code
    return __res.json({ error: "ok" }); //are yoy statr implement remove this  line and start coding
};
exports.default = { __deleteDeliveryOder, __createDeliveryOrder, __updateDeliveryOrder, __getAllOrders, __statusChange, __getById, __getAllLov };
