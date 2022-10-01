"use strict";
import express from "express";
import PurchaseRequest from "../../service/Phurchase-request/PhurchaseRequest";
const router = express.Router();

/**
 * @apiDoc Router delete PurchaseRequest.
 * 
 * @linker{Url/api/prchase-request/delete/id}
 */
router.delete("/delete/:id",PurchaseRequest.__deletePhurchaseRequest);

/**
 * @apiDoc  create PurchaseRequest
 * 
 * @linker{Url/api/prchase-request/create/{Object}}
 */
router.post("/create",PurchaseRequest.__createPhurchaseRequest);

/**
 * @apiDoc Edit PurchaseRequest.
 * 
 * @linker{Url/api/prchase-request/edit/id}
 */
router.put("/edit/:id",PurchaseRequest.__updatePhurchaseRequest);

/**
 * @apiDoc Get All PurchaseRequest.
 * 
 * @linker{Url/api/prchase-request/:companyId}
 */
router.get("/:companyId/:page/:pageSize",PurchaseRequest.__getAllRequests)

/**
 * @apiDoc Get PurchaseRequest By id.
 * 
 * @linker{Url/api/prchase-request/id/status/companyId}
 */
 router.get("/:id/:status/:companyId",PurchaseRequest.__getById)

/**
 * @apiDoc StatusChange PurchaseRequest By id.
 * 
 * @linker{Url/api/prchase-request/edit/status/id/status}
 */
 router.put("/edit/status/:id/:status",PurchaseRequest.__statusChange)

 /**
 * @apiDoc list PurchaseRequest  lov.
 * 
 * @linker{Url/api/prchase-request/list/conpanyid}
 */
router.get("/list/:conpanyid",PurchaseRequest.__getAllLov)
  
export  = router;
