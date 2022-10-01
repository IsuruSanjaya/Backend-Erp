import { NextFunction, Request, Response } from "express";
import Customer from "../../models/Customer/Customer";
import mongoose from "mongoose";

/**
 * 
 * @param __req Customer
 * @param __res 
 * @returns 
 */
const __createCustomer = (__req: Request, __res: Response) => {
  try {
    const {
      date,
      referenceNumber,
      title,
      nic,
      mobile,
      email,
      customer,
      customerType,
      salesPerson,
      address,
      status,
      companyId,
      createAt
    } = __req.body;
    const d: Date = new Date(
      date.split("-")[0],
      date.split("-")[1],
      date.split("-")[2]
    );
   

    const customer_ = new Customer({
      _id: new mongoose.Types.ObjectId(),
      date: d,
      referenceNumber,
      title,
      nic,
      mobile,
      email,
      customer,
      customerType,
      salesPerson,
      address,
      status,
      companyId,
      createAt
    });

    return customer_
      .save()
      .then((__order) => __res.status(201).json({ __order }))
      .catch((error) => __res.status(500).json({ error }));
  } catch (err) {
    return __res.status(500).json({ error: "create customer failed" });
  }
};

/**
 * 
 * @param __req customer
 * @param __res 
 * @returns 
 */
const __updateCustomer = (__req: Request, __res: Response) => {
  try {
    const Id = __req.params.id;
    return Customer.findById(Id)
      .then((customer) => {
        if (customer) {
          customer.set(__req.body);
          return customer
            .save()
            .then((customer) => {
              return __res.status(200).json({ customer });
            })
            .catch((err) => {
              return __res.status(500).json({ err });
            });
        } else {
          return __res.status(404).send({ error: "customer not found" });
        }
      })
      .catch((err) => {
        return __res.status(500).json({ err });
      });
  } catch (err) {
    return __res
      .status(500)
      .send({ error: `update customer failed ${err}` });
  }
};

/**
 * 
 * @param __req customer
 * @param __res 
 * @returns 
 */
const __getAllCustomers = (__req: Request, __res: Response) => {
  const companyId:any = __req.params.companyId;
  const page:number = parseInt( __req.params.page);
  const pageSize:number = parseInt(__req.params.pageSize);

  return Customer.find({status:1, companyId:companyId},{})
  .skip(page * pageSize).limit(pageSize)
    .then((customers) => __res.status(200).json({ customers }))
    .catch((error) => __res.status(500).json({ error }))
};

/**
 * 
 * @param __req customer
 * @param __res 
 * @returns 
 */
const __deleteCustomer = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  return Customer.findByIdAndDelete(__id)
  .then(() => __res.status(200).json({success: true  }))
  .catch((error) => __res.status(500).json({ error }));
    
};

/**
 * 
 * @param __req deliveryOrder
 * @param __res 
 * @returns 
 */
const __getById = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  const status:any = __req.params.status;
  const companyId:any = __req.params.companyId;
  
  return Customer.findOne({_id:__id,status:status,companyId:companyId},{})
    .then((customer) => __res.status(200).json({ customer }))
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
    
    return  Customer.findByIdAndUpdate(id,{status:status},{new: true},
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
  

export default {__deleteCustomer, __createCustomer, __updateCustomer, __getAllCustomers,__statusChange,__getById, __getAllLov}
