"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const PhurchaseRequestSchema = new mongoose_1.Schema({
    date: { type: Date, default: null, required: true },
    orderNumber: { type: String, required: true },
    referenceNumber: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    description: { type: String, required: false },
    customer: { type: Number, required: false },
    itemId: { type: Number, required: false },
    status: { type: Number, required: true },
    companyId: { type: Number, required: true },
    createAt: { type: String, required: false },
    updateAt: { type: String, required: false },
    deleteAt: { type: String, required: false }
});
exports.default = mongoose_1.default.model('erp_inv_Phurchase_Request', PhurchaseRequestSchema);
