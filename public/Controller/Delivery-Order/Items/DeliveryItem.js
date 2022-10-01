"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const DeliveryItems_1 = __importDefault(require("../../../service/delivery-order/Items/DeliveryItems"));
const router = express_1.default.Router();
/**
 * @apiDoc Router delete delivery ritem.
 *
 * @linker{Url/api/delivery-item/delete/id}
 */
router.delete("/delete/items/:id", DeliveryItems_1.default.__deleteDeliveryItems);
/**
 * @apiDoc  create delivery Item
 *
 * @linker{Url/api/delivery-item/create/{Object}}
 */
router.post("/create", DeliveryItems_1.default.__createDeliveryItem);
/**
 * @apiDoc Edit delivery item.
 *
 * @linker{Url/api/delivery-item/edit/id}
 */
router.put("/edit/:id", DeliveryItems_1.default.__updateDeliveryItem);
/**
 * @apiDoc Get All delivery item.
 *
 * @linker{Url/api/delivery-item/companyId}
 */
router.get("/:companyId/:page/:pageSize", DeliveryItems_1.default.__getAllItems);
/**
 * @apiDoc Get delivery item By id.
 *
 * @linker{Url/api/delivery-item/id/status/companyId}
 */
router.get("/:id/:status/:companyId", DeliveryItems_1.default.__getById);
/**
 * @apiDoc StatusChange delivery item By id.
 *
 * @linker{Url/api/delivery-item/edit/status/id}
 */
router.put("/edit/status/:id/:status", DeliveryItems_1.default.__statusChange);
/**
* @apiDoc StatusChange delivery item lov.
*
* @linker{Url/api/delivery-item/list/companyid}
*/
router.get("/list/:companyid", DeliveryItems_1.default.__getAllLov);
module.exports = router;
