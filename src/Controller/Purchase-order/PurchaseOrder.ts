"use strict";
import express from "express";
import PurchaseOrder from "../../service/Purchase-order/PurchaseOrder";
const router = express.Router();

/**
 * @apiDoc Router delete PurchaseOrder.
 * 
 * @linker{Url/api/purchase-order/delete/id}
 */
router.delete("/delete/:id",PurchaseOrder.__deletePurchaseOrder);

/**
 * @apiDoc  create PurchaseOrder
 * 
 * @linker{Url/api/purchase-order/create/{Object}}
 */
router.post("/create",PurchaseOrder.__createPurchaseOrder);

/**
 * @apiDoc Edit PurchaseOrder.
 * 
 * @linker{Url/api/purchase-order/edit/id}
 */
router.put("/edit/:id",PurchaseOrder.__updatePurchaseOrder);

/**
 * @apiDoc Get All PurchaseOrder.
 * 
 * @linker{Url/api/purchase-order/:companyId}
 */
router.get("/:companyId/:page/:pageSize",PurchaseOrder.__getAllOrders)

/**
 * @apiDoc Get PurchaseOrder By id.
 * 
 * @linker{Url/api/purchaseOrder-order/id/status/companyId}
 */
 router.get("/:id/:status/:companyId",PurchaseOrder.__getById)

/**
 * @apiDoc StatusChange PurchaseOrder By id.
 * 
 * @linker{Url/api/purchase-order/edit/status/id/status}
 */
 router.put("/edit/status/:id/:status",PurchaseOrder.__statusChange)

 /**
 * @apiDoc list PurchaseOrder lov.
 * 
 * @linker{Url/api/Purchase-order/list/conpanyid}
 */
router.get("/list/:conpanyid",PurchaseOrder.__getAllLov)
  
export  = router;
