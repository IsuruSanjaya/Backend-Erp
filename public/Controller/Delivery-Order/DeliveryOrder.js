"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const DeliveryOrder_1 = __importDefault(require("../../service/delivery-order/DeliveryOrder"));
const router = express_1.default.Router();
/**
 * @apiDoc Router delete deliveryOrder.
 *
 * @linker{Url/api/delivery-order/delete/{id}}
 */
router.delete("/delete/:id", DeliveryOrder_1.default.__deleteDeliveryOder);
/**
 * @apiDoc  create deliveryOrde.r
 *
 * @linker{Url/api/delivery-order/create/{Object}}
 */
router.post("/create", DeliveryOrder_1.default.__createDeliveryOrder);
/**
 * @apiDoc Edit deliveryOrder.
 *
 * @linker{Url/api/delivery-order/edit/id}
 */
router.put("/edit/:id", DeliveryOrder_1.default.__updateDeliveryOrder);
/**
 * @apiDoc Get All deliveryOrders.
 *
 * @linker{Url/api/delivery-order/:companyId}
 */
router.get("/:companyId/:page/:pageSize", DeliveryOrder_1.default.__getAllOrders);
/**
 * @apiDoc Get deliveryOrder By id.
 *
 * @linker{Url/api/delivery-order/id/status/companyId}
 */
router.get("/:id/:status/:companyId", DeliveryOrder_1.default.__getById);
/**
 * @apiDoc StatusChange deliveryOrder By id.
 *
 * @linker{Url/api/delivery-order/edit/status/id/status}
 */
router.put("/edit/status/:id/:status", DeliveryOrder_1.default.__statusChange);
/**
* @apiDoc StatusChange delivery item lov.
*
* @linker{Url/api/delivery-order/list/conpanyid}
*/
router.get("/list/:conpanyid", DeliveryOrder_1.default.__getAllLov);
module.exports = router;
