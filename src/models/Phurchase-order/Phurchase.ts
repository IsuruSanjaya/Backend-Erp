import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseOrder extends Document {
  _id: string,
  date: Date,
  transactionDate: Date,
  orderNumber: string,
  referenceNumber: string,
  transactionType: string,
  purchaseOrder: string,
  shippingAddress: string,
  requestOrder:number;
  BillAddress: string
  status: number,
  companyId: number,
  createAt: string,
  updateAt: string,
  deleteAt: string
}

const PhurchaseOrderSchema: Schema = new Schema({
    date: {type: Date,default: null,required: true},
    transactionDate:{ type: Date,default: null, required: true},
    orderNumber: {type: String,required: false},
    requestOrder: {type: Number,required: false},
    referenceNumber: {type: String,required: true},
    transactionType: {type: String,required: true},
    purchaseOrder: {type: String,required: true},
    shippingAddress: {type: String,required: true},
    BillAddress: {type: String,required: true},
    status: {type: Number,required: true},
    companyId: {type: Number,required: true},
    createAt: {type: String,required: false},
    updateAt: {type:String,required: false},
    deleteAt: {type:String,required: false}
});

export default mongoose.model<PhurchaseOrder>('erp_inv_Phurchase_Order',PhurchaseOrderSchema);
  





