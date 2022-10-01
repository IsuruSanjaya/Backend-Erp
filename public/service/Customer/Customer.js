"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../../models/Customer/Customer"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 *
 * @param __req Customer
 * @param __res
 * @returns
 */
const __createCustomer = (__req, __res) => {
    try {
        const { date, referenceNumber, title, nic, mobile, email, customer, customerType, salesPerson, address, status, companyId, createAt } = __req.body;
        const d = new Date(date.split("-")[0], date.split("-")[1], date.split("-")[2]);
        const customer_ = new Customer_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            date: d,
            referenceNumber,
            title,
            nic,
            mobile,
            email,
            customer,
            customerType,
            salesPerson,
            address,
            status,
            companyId,
            createAt
        });
        return customer_
            .save()
            .then((__order) => __res.status(201).json({ __order }))
            .catch((error) => __res.status(500).json({ error }));
    }
    catch (err) {
        return __res.status(500).json({ error: "create customer failed" });
    }
};
/**
 *
 * @param __req customer
 * @param __res
 * @returns
 */
const __updateCustomer = (__req, __res) => {
    try {
        const Id = __req.params.id;
        return Customer_1.default.findById(Id)
            .then((customer) => {
            if (customer) {
                customer.set(__req.body);
                return customer
                    .save()
                    .then((customer) => {
                    return __res.status(200).json({ customer });
                })
                    .catch((err) => {
                    return __res.status(500).json({ err });
                });
            }
            else {
                return __res.status(404).send({ error: "customer not found" });
            }
        })
            .catch((err) => {
            return __res.status(500).json({ err });
        });
    }
    catch (err) {
        return __res
            .status(500)
            .send({ error: `update customer failed ${err}` });
    }
};
/**
 *
 * @param __req customer
 * @param __res
 * @returns
 */
const __getAllCustomers = (__req, __res) => {
    const companyId = __req.params.companyId;
    const page = parseInt(__req.params.page);
    const pageSize = parseInt(__req.params.pageSize);
    return Customer_1.default.find({ status: 1, companyId: companyId }, {})
        .skip(page * pageSize).limit(pageSize)
        .then((customers) => __res.status(200).json({ customers }))
        .catch((error) => __res.status(500).json({ error }));
};
/**
 *
 * @param __req customer
 * @param __res
 * @returns
 */
const __deleteCustomer = (__req, __res) => {
    const __id = __req.params.id;
    return Customer_1.default.findByIdAndDelete(__id)
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
    return Customer_1.default.findOne({ _id: __id, status: status, companyId: companyId }, {})
        .then((customer) => __res.status(200).json({ customer }))
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
    return Customer_1.default.findByIdAndUpdate(id, { status: status }, { new: true }, (err, doc) => {
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
exports.default = { __deleteCustomer, __createCustomer, __updateCustomer, __getAllCustomers, __statusChange, __getById, __getAllLov };
