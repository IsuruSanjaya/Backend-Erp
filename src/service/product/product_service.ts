import { NextFunction, Request, Response } from 'express';
import Product from '../../models/product/product';
import mongoose from 'mongoose';
//create
const createProduct = (__req: Request, __res: Response) => {
 
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name:__req.body.name,
      description:__req.body.description,
      manufacturer:__req.body.manufacturer,
      supplier:__req.body.supplier,
      in_stock_amount:__req.body.in_stock_amount,
      unit_price:__req.body.unit_price,
      type:__req.body.type,
    });

    return product
    .save().then((__Product)=>{
      return __res.status(200).json({
          success:true,
          message:'Successfully created',
          Product:__Product,
      });
  }).catch((err)=>{
      __res.status(500).json({
          success:false,
          message:'Not Success',
          err:err.message,
      });
  });
  } 
  
//read
const getOneProduct = (__req: Request, __res: Response) => {
  try {
    const id = __req.params.id;

    return Product.findById(id)
      .then((product) => {
        if (product) return __res.status(200).json(product);
        return __res.status(404).json({ message: 'Product not found' });
      })
      .catch((error) => __res.status(500).json(error));
  } catch (error) {
    return __res.status(500).json({ error });
  }
};
//read all
const getAllProducts = (__req: Request, __res: Response) => {
 
    return Product.find({},{})
    .then((product) => __res.status(200).json({ product }))
    .catch((error) => __res.status(500).json({ error }));
      }

//update
const updateProduct = (__req: Request, __res: Response) => {
  const __productId = __req.params.id;

  return Product.findById(__productId)
    .then((product) => {
        if(product){
            product.set(__req.body)
            return product.save()
            .then(__product=>__res.status(201).json({product:__product}))
            .catch(error=>__res.status(500).json(error));
        }else{
            return __res.status(404).json({message:"Product not found"})
        }
    })
    .catch((err) => __res.status(500).json({ error: err }));

  return __res.status(200).json({ message: 'success' });
};
//delete
const deleteProduct = (__req: Request, __res: Response) => {
  const __id = __req.params.id;
  return Product.findByIdAndDelete(__id)
    .then(() => __res.status(200).json({ success: true }))
    .catch((error) => __res.status(500).json({ error }));
};

export default {
  createProduct,
  getOneProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
