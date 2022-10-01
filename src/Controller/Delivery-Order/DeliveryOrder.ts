"use strict";
import express from "express";
import deliveryservice from "../../service/delivery-order/DeliveryOrder";
const router = express.Router();

/**
 * @apiDoc Router delete deliveryOrder.
 * 
 * @linker{Url/api/delivery-order/delete/{id}}
 */
router.delete("/delete/:id",deliveryservice.__deleteDeliveryOder);

/**
 * @apiDoc  create deliveryOrde.r
 * 
 * @linker{Url/api/delivery-order/create/{Object}}
 */
router.post("/create",deliveryservice.__createDeliveryOrder);

/**
 * @apiDoc Edit deliveryOrder.
 * 
 * @linker{Url/api/delivery-order/edit/id}
 */
router.put("/edit/:id",deliveryservice.__updateDeliveryOrder);

/**
 * @apiDoc Get All deliveryOrders.
 * 
 * @linker{Url/api/delivery-order/:companyId}
 */
router.get("/:companyId/:page/:pageSize",deliveryservice.__getAllOrders)

/**
 * @apiDoc Get deliveryOrder By id.
 * 
 * @linker{Url/api/delivery-order/id/status/companyId}
 */
 router.get("/:id/:status/:companyId",deliveryservice.__getById)

/**
 * @apiDoc StatusChange deliveryOrder By id.
 * 
 * @linker{Url/api/delivery-order/edit/status/id/status}
 */
 router.put("/edit/status/:id/:status",deliveryservice.__statusChange)

 /**
 * @apiDoc StatusChange delivery item lov.
 * 
 * @linker{Url/api/delivery-order/list/conpanyid}
 */
router.get("/list/:conpanyid",deliveryservice.__getAllLov)
  
export  = router;
