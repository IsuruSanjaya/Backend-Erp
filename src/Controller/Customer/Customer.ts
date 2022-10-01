"use strict";
import express from "express";
import customerservice from "../../service/Customer/Customer";
import extractJWT from "../../middleware/extractJWT";
const router = express.Router();

/**
 * @apiDoc Router delete customer.
 * 
 * @linker{Url/api/customer/delete/id}
 */
router.delete("/delete/:id",customerservice.__deleteCustomer);

/**
 * @apiDoc  create customer
 * 
 * @linker{Url/api/customer/create/{Object}}
 */
router.post("/create",customerservice.__createCustomer);

/**
 * @apiDoc Edit customer.
 * 
 * @linker{Url/api/customer/edit/id}
 */
router.put("/edit/:id",customerservice.__updateCustomer);

/**
 * @apiDoc Get All customers.
 * 
 * @linker{Url/api/customers/:companyId/:page/:pageSize}
 */
router.get("/:companyId/:page/:pageSize",customerservice.__getAllCustomers)

/**
 * @apiDoc Get customer By id.
 * 
 * @linker{Url/api/customer/id/status/companyId}
 */
 router.get("/getbyid/:id/:status/:companyId",customerservice.__getById)

/**
 * @apiDoc StatusChange customer By id.
 * 
 * @linker{Url/api/customer/edit/status/id/status}
 */
 router.put("/edit/status/:id/:status",customerservice.__statusChange)

 /**
 * @apiDoc StatusChange customer list lov.
 * 
 * @linker{Url/api/customer/list/conpanyid}
 */
router.get("/list/:conpanyid",customerservice.__getAllLov)
  
export  = router;
