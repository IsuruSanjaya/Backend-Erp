"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const PurchaseOrder_1 = __importDefault(require("../../service/Purchase-order/PurchaseOrder"));
const router = express_1.default.Router();
/**
 * @apiDoc Router delete PurchaseOrder.
 *
 * @linker{Url/api/purchase-order/delete/id}
 */
router.delete("/delete/:id", PurchaseOrder_1.default.__deletePurchaseOrder);
/**
 * @apiDoc  create PurchaseOrder
 *
 * @linker{Url/api/purchase-order/create/{Object}}
 */
router.post("/create", PurchaseOrder_1.default.__createPurchaseOrder);
/**
 * @apiDoc Edit PurchaseOrder.
 *
 * @linker{Url/api/purchase-order/edit/id}
 */
router.put("/edit/:id", PurchaseOrder_1.default.__updatePurchaseOrder);
/**
 * @apiDoc Get All PurchaseOrder.
 *
 * @linker{Url/api/purchase-order/:companyId}
 */
router.get("/:companyId/:page/:pageSize", PurchaseOrder_1.default.__getAllOrders);
/**
 * @apiDoc Get PurchaseOrder By id.
 *
 * @linker{Url/api/purchaseOrder-order/id/status/companyId}
 */
router.get("/:id/:status/:companyId", PurchaseOrder_1.default.__getById);
/**
 * @apiDoc StatusChange PurchaseOrder By id.
 *
 * @linker{Url/api/purchase-order/edit/status/id/status}
 */
router.put("/edit/status/:id/:status", PurchaseOrder_1.default.__statusChange);
/**
* @apiDoc list PurchaseOrder lov.
*
* @linker{Url/api/Purchase-order/list/conpanyid}
*/
router.get("/list/:conpanyid", PurchaseOrder_1.default.__getAllLov);
module.exports = router;
