"use strict";
import express from "express";
import deliveryItemService from "../../../service/delivery-order/Items/DeliveryItems";
const router = express.Router();

/**
 * @apiDoc Router delete delivery ritem.
 * 
 * @linker{Url/api/delivery-item/delete/id}
 */
router.delete("/delete/items/:id",deliveryItemService.__deleteDeliveryItems);

/**
 * @apiDoc  create delivery Item
 * 
 * @linker{Url/api/delivery-item/create/{Object}}
 */
router.post("/create",deliveryItemService.__createDeliveryItem);

/**
 * @apiDoc Edit delivery item.
 * 
 * @linker{Url/api/delivery-item/edit/id}
 */
router.put("/edit/:id",deliveryItemService.__updateDeliveryItem);

/**
 * @apiDoc Get All delivery item.
 * 
 * @linker{Url/api/delivery-item/companyId}
 */
router.get("/:companyId/:page/:pageSize",deliveryItemService.__getAllItems)

/**
 * @apiDoc Get delivery item By id.
 * 
 * @linker{Url/api/delivery-item/id/status/companyId}
 */
 router.get("/:id/:status/:companyId",deliveryItemService.__getById)

/**
 * @apiDoc StatusChange delivery item By id.
 * 
 * @linker{Url/api/delivery-item/edit/status/id}
 */
 router.put("/edit/status/:id/:status",deliveryItemService.__statusChange)

 /**
 * @apiDoc StatusChange delivery item lov.
 * 
 * @linker{Url/api/delivery-item/list/companyid}
 */
  router.get("/list/:companyid",deliveryItemService.__getAllLov)
 
export  = router;
