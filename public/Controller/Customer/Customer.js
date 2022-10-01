"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Customer_1 = __importDefault(require("../../service/Customer/Customer"));
const router = express_1.default.Router();
/**
 * @apiDoc Router delete customer.
 *
 * @linker{Url/api/customer/delete/id}
 */
router.delete("/delete/:id", Customer_1.default.__deleteCustomer);
/**
 * @apiDoc  create customer
 *
 * @linker{Url/api/customer/create/{Object}}
 */
router.post("/create", Customer_1.default.__createCustomer);
/**
 * @apiDoc Edit customer.
 *
 * @linker{Url/api/customer/edit/id}
 */
router.put("/edit/:id", Customer_1.default.__updateCustomer);
/**
 * @apiDoc Get All customers.
 *
 * @linker{Url/api/customers/:companyId/:page/:pageSize}
 */
router.get("/:companyId/:page/:pageSize", Customer_1.default.__getAllCustomers);
/**
 * @apiDoc Get customer By id.
 *
 * @linker{Url/api/customer/id/status/companyId}
 */
router.get("/getbyid/:id/:status/:companyId", Customer_1.default.__getById);
/**
 * @apiDoc StatusChange customer By id.
 *
 * @linker{Url/api/customer/edit/status/id/status}
 */
router.put("/edit/status/:id/:status", Customer_1.default.__statusChange);
/**
* @apiDoc StatusChange customer list lov.
*
* @linker{Url/api/customer/list/conpanyid}
*/
router.get("/list/:conpanyid", Customer_1.default.__getAllLov);
module.exports = router;
