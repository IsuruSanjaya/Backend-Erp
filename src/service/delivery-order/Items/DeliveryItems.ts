import { NextFunction, Request, Response } from "express";
import DeliveryItems  from "../../../models/delivery_order/Items/DeliveryItems";
import mongoose from "mongoose";

/**
 * 
 * @param __req deliveryItem
 * @param __res 
 * @returns 
 */
const __createDeliveryItem = (__req: Request, __res: Response) => {
 
    const deliveryItems = new DeliveryItems({
        __id: mongoose.Types.ObjectId(),
        itemName:__req.body.itemName,
        quantity:__req.body.quantity,
        unitPrice:__req.body.unitPrice,
        unitDiscount:__req.body.unitDiscount,
        unitTax: __req.body.unitTax,
        deliveryOrder: __req.body.deliveryOrder,
        unitTaxAmount: __req.body.unitTaxAmount,
        status: __req.body.status,
        companyId: __req.body.companyId,
        createAt:__req.body.createAt
       
    });

    return deliveryItems
    .save().then((newDeliveryItem)=>{
        return __res.status(200).json({
            success:true,
            message:'Successfully created',
            DeliveryItems:newDeliveryItem,
        });
    }).catch((err)=>{
        __res.status(500).json({
            success:false,
            message:'Not Success',
            err:err.message,
        });
    });
};

/**
 * 
 * @param __req deliveryItem
 * @param __res 
 * @returns 
 */
const __updateDeliveryItem = (__req: Request, __res: Response) => {
 
   const deliveryItems = {
    itemName: __req.body.itemName,
    quantity: __req.body.quantity,
    unitPrice: __req.body.unitPrice,
    unitDiscount: __req.body.unitDiscount,
    unitTax: __req.body.unitTax,
    deliveryOrder: __req.body.deliveryOrder,
    unitTaxAmount: __req.body.unitTaxAmount,
    status: __req.body.status,
    updateAt:  __req.body.updateAt
};
DeliveryItems.findByIdAndUpdate(__req.params.id, { $set: deliveryItems }, { new: true }, (err, doc) => {
    return __res.status(200).json({
        success:true,
        message:'Updated',
    });
}).catch((err)=>{
    __res.status(500).json({
        success:false,
        message:'Not deleted',
        err:err.message,
    });
});
};

/**
 * 
 * @param __req deliveryItem
 * @param __res 
 * @returns 
 */
const __getAllItems = (__req: Request, __res: Response) => {
    const companyId:any = __req.params.companyId;
    const page:number = parseInt( __req.params.page);
    const pageSize:number = parseInt(__req.params.pageSize);
    return DeliveryItems.find({status:1,companyId:companyId},{})
    .skip(page * pageSize).limit(pageSize)
    .then((item) => __res.status(200).json({ item }))
    .catch((error) => __res.status(500).json({ error }));
};

/**
 * 
 * @param __req deliveryItem
 * @param __res 
 * @returns 
 */
const __deleteDeliveryItems = (__req: Request, __res: Response) => {
    const __id = __req.params.id;
    return DeliveryItems.findByIdAndDelete(__id)
    .then(() => __res.status(200).json({success: true  }))
    .catch((error) => __res.status(500).json({ error }));
      
};

/**
 * 
 * @param __req deliveryItem
 * @param __res 
 * @returns 
 */
const __getById = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  const status:any = __req.params.status;
  const companyId:any = __req.params.companyId;
  
  return DeliveryItems.findOne({_id:__id,status:status,companyId:companyId},{})
    .then((item) => __res.status(200).json({ item }))
    .catch((error) => __res.status(500).json({ error }));
}

/**
 * 
 * @param __req 
 * @param __res 
 * @returns 
 */
const __statusChange = (__req: Request, __res: Response) => {
    const id = __req.params.id;
    const status:any = __req.params.status;
    
    return  DeliveryItems.findByIdAndUpdate(id,{status:status},{new: true},
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
    const companyid:number=parseInt(__req.params.companyid);
    return DeliveryItems.find({companyId:companyid}).select('_id itemName')
    .then((item) => __res.status(200).json({ item }))
    .catch((error) => __res.status(500).json({ error }));

}



export default {__deleteDeliveryItems, __createDeliveryItem, __updateDeliveryItem, __getAllItems,__statusChange,__getById, __getAllLov}

