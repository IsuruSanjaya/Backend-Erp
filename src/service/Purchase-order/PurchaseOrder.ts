import { NextFunction, Request, Response } from "express";
import PurchaseOrder from "../../models/Phurchase-order/Phurchase";
import mongoose from "mongoose";

/**
 * 
 * @param __req PurchaseOrder
 * @param __res 
 * @returns 
 */
const __createPurchaseOrder = (__req: Request, __res: Response) => {
  try {
    const {
        date,
        transactionDate,
        orderNumber,
        referenceNumber,
        transactionType,
        purchaseOrder,
        shippingAddress,
        requestOrder,
        BillAddress,
        status,
        companyId,
      createAt
    } = __req.body;
    const d: Date = new Date(
      date.split("-")[0],
      date.split("-")[1],
      date.split("-")[2]
    );
    const transaction_date: Date = new Date(
      transactionDate.split("-")[0],
      transactionDate.split("-")[1],
      transactionDate.split("-")[2]
    );

    const purchase_Order = new PurchaseOrder({
      _id: new mongoose.Types.ObjectId(),
      date: d,
      transactionDate: transaction_date,
      orderNumber,
      referenceNumber,
      transactionType,
      requestOrder,
      BillAddress,
      purchaseOrder,
      shippingAddress,
      status,
      companyId,
      createAt
    });

    return purchase_Order
      .save()
      .then((__order) => __res.status(201).json({ __order }))
      .catch((error) => __res.status(500).json({ error }));
  } catch (err) {
    return __res.status(500).json({ error: "create order failed" });
  }
};

/**
 * 
 * @param __req PurchaseOrder
 * @param __res 
 * @returns 
 */
const __updatePurchaseOrder = (__req: Request, __res: Response) => {
  try {
    const orderId = __req.params.id;
    return PurchaseOrder.findById(orderId)
      .then((order) => {
        if (order) {
          order.set(__req.body);
          return order
            .save()
            .then((__order) => {
              return __res.status(200).json({ __order });
            })
            .catch((err) => {
              return __res.status(500).json({ err });
            });
        } else {
          return __res.status(404).send({ error: "order not found" });
        }
      })
      .catch((err) => {
        return __res.status(500).json({ err });
      });
  } catch (err) {
    return __res
      .status(500)
      .send({ error: `update order failed ${err}` });
  }
};

/**
 * 
 * @param __req PurchaseOrder
 * @param __res 
 * @returns 
 */
const __getAllOrders = (__req: Request, __res: Response) => {
  const companyId:any = __req.params.companyId;
  const page:number = parseInt( __req.params.page);
  const pageSize:number = parseInt(__req.params.pageSize);

  return PurchaseOrder.find({status:1, companyId:companyId},{})
  .skip(page * pageSize).limit(pageSize)
    .then((orders) => __res.status(200).json({ orders }))
    .catch((error) => __res.status(500).json({ error }))
};

/**
 * 
 * @param __req PurchaseOrder
 * @param __res 
 * @returns 
 */
const __deletePurchaseOrder = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  return PurchaseOrder.findByIdAndDelete(__id)
  .then(() => __res.status(200).json({success: true  }))
  .catch((error) => __res.status(500).json({ error }));
    
};

/**
 * 
 * @param __req PurchaseOrder
 * @param __res 
 * @returns 
 */
const __getById = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  const status:any = __req.params.status;
  const companyId:any = __req.params.companyId;
  
  return PurchaseOrder.findOne({_id:__id,status:status,companyId:companyId},{})
    .then((item) => __res.status(200).json({ item }))
    .catch((error) => __res.status(500).json({ error }));
};

/**
 * 
 * @param __req 
 * @param __res 
 * @returns 
 */
const __statusChange =  (__req: Request, __res: Response) => {
    const id = __req.params.id;
    const status:any = __req.params.status;
    
    return  PurchaseOrder.findByIdAndUpdate(id,{status:status},{new: true},
      (err, doc) => {
        return __res.status(200).json({message:true});
    }).catch((err)=>{
        __res.status(500).json({err:err.message})
      });
};

/**
 * 
 * @param __req 
 * @param __res 
 * @returns 
 */
const __getAllLov = (__req: Request, __res: Response) => {
  //imlement your code
  

  
    
  return __res.json({ error:"ok"});//are yoy statr implement remove this  line and start coding
  }
  

export default {__deletePurchaseOrder, __createPurchaseOrder, __updatePurchaseOrder, __getAllOrders,__statusChange,__getById, __getAllLov}
