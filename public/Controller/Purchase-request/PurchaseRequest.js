"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const PhurchaseRequest_1 = __importDefault(require("../../service/Phurchase-request/PhurchaseRequest"));
const router = express_1.default.Router();
/**
 * @apiDoc Router delete PurchaseRequest.
 *
 * @linker{Url/api/prchase-request/delete/id}
 */
router.delete("/delete/:id", PhurchaseRequest_1.default.__deletePhurchaseRequest);
/**
 * @apiDoc  create PurchaseRequest
 *
 * @linker{Url/api/prchase-request/create/{Object}}
 */
router.post("/create", PhurchaseRequest_1.default.__createPhurchaseRequest);
/**
 * @apiDoc Edit PurchaseRequest.
 *
 * @linker{Url/api/prchase-request/edit/id}
 */
router.put("/edit/:id", PhurchaseRequest_1.default.__updatePhurchaseRequest);
/**
 * @apiDoc Get All PurchaseRequest.
 *
 * @linker{Url/api/prchase-request/:companyId}
 */
router.get("/:companyId/:page/:pageSize", PhurchaseRequest_1.default.__getAllRequests);
/**
 * @apiDoc Get PurchaseRequest By id.
 *
 * @linker{Url/api/prchase-request/id/status/companyId}
 */
router.get("/:id/:status/:companyId", PhurchaseRequest_1.default.__getById);
/**
 * @apiDoc StatusChange PurchaseRequest By id.
 *
 * @linker{Url/api/prchase-request/edit/status/id/status}
 */
router.put("/edit/status/:id/:status", PhurchaseRequest_1.default.__statusChange);
/**
* @apiDoc list PurchaseRequest  lov.
*
* @linker{Url/api/prchase-request/list/conpanyid}
*/
router.get("/list/:conpanyid", PhurchaseRequest_1.default.__getAllLov);
module.exports = router;
