import { NextFunction, Request, Response } from "express";
import PhurchaseRequest from "../../models/Phurchase-request/PhurchaseRequest";
import mongoose from "mongoose";

/**
 * 
 * @param __req PhurchaseRequest
 * @param __res 
 * @returns 
 */
const __createPhurchaseRequest = (__req: Request, __res: Response) => {
  try {
    const {
        date,
        orderNumber,
        referenceNumber,
        shippingAddress,
        description,
        customer,
        itemId,
        status,
        companyId,
        createAt,
    } = __req.body;
    const d: Date = new Date(
      date.split("-")[0],
      date.split("-")[1],
      date.split("-")[2]
    );

    const phurchase_request = new PhurchaseRequest({
      _id: new mongoose.Types.ObjectId(),
      date: d,
      orderNumber,
      referenceNumber,
      shippingAddress,
      description,
      customer,
      itemId,
      status,
      companyId,
      createAt
    });

    return phurchase_request
      .save()
      .then((__order) => __res.status(201).json({ __order }))
      .catch((error) => __res.status(500).json({ error }));
  } catch (err) {
    return __res.status(500).json({ error: "create PhurchaseRequest failed" });
  }
};

/**
 * 
 * @param __req PhurchaseRequest
 * @param __res 
 * @returns 
 */
const __updatePhurchaseRequest = (__req: Request, __res: Response) => {
  try {
    const Id = __req.params.id;
    return PhurchaseRequest.findById(Id)
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
          return __res.status(404).send({ error: " not found" });
        }
      })
      .catch((err) => {
        return __res.status(500).json({ err });
      });
  } catch (err) {
    return __res
      .status(500)
      .send({ error: `update  PhurchaseRequest failed ${err}` });
  }
};

/**
 * 
 * @param __req PhurchaseRequest
 * @param __res 
 * @returns 
 */
const __getAllRequests = (__req: Request, __res: Response) => {
  const companyId:any = __req.params.companyId;
  const page:number = parseInt( __req.params.page);
  const pageSize:number = parseInt(__req.params.pageSize);

  return PhurchaseRequest.find({status:1, companyId:companyId},{})
  .skip(page * pageSize).limit(pageSize)
    .then((orders) => __res.status(200).json({ orders }))
    .catch((error) => __res.status(500).json({ error }))
};

/**
 * 
 * @param __req PhurchaseRequest
 * @param __res 
 * @returns 
 */
const __deletePhurchaseRequest = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  return PhurchaseRequest.findByIdAndDelete(__id)
  .then(() => __res.status(200).json({success: true  }))
  .catch((error) => __res.status(500).json({ error }));
    
};

/**
 * 
 * @param __req PhurchaseRequest
 * @param __res 
 * @returns 
 */
const __getById = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  const status:any = __req.params.status;
  const companyId:any = __req.params.companyId;
  
  return PhurchaseRequest.findOne({_id:__id,status:status,companyId:companyId},{})
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
    
    return  PhurchaseRequest.findByIdAndUpdate(id,{status:status},{new: true},
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
  

export default {__deletePhurchaseRequest, __createPhurchaseRequest, __updatePhurchaseRequest, __getAllRequests,__statusChange,__getById, __getAllLov}
