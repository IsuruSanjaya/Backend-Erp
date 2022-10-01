import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseRequest extends Document {
  _id: string,
  date: Date,
  orderNumber: string,
  referenceNumber: string,
  shippingAddress: string,
  description:string,
  customer: number,
  itemId: number,
  status: number,
  companyId: number,
  createAt: string,
  updateAt: string,
  deleteAt: string
}

const PhurchaseRequestSchema: Schema = new Schema({
    date: {type: Date,default: null,required: true},
    orderNumber: {type: String,required: true},
    referenceNumber: {type: String,required: true},
    shippingAddress: {type: String,required: true},
    description:  {type: String,required: false},
    customer:  {type: Number,required: false},
    itemId: {type: Number,required: false},
    status: {type: Number,required: true},
    companyId: {type: Number,required: true},
    createAt: {type: String,required: false},
    updateAt: {type:String,required: false},
    deleteAt: {type:String,required: false}
});

export default mongoose.model<PhurchaseRequest>('erp_inv_Phurchase_Request',PhurchaseRequestSchema);
  





