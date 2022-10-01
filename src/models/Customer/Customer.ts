import mongoose, { Schema, Document } from 'mongoose';

export interface Customer extends Document {
  _id: string,
  date: Date,
  referenceNumber: string,
  title: string,
  nic: number,
  mobile:number,
  email: string,
  customer: string,
  customerType: string,
  salesPerson: number,
  address: string,
  status: number,
  companyId: number,
  createAt: string,
  updateAt: string,
  deleteAt: string
}

const CustomerSchema: Schema = new Schema({
    date: {type: Date,default: null,required: true},
    title:  {type: String,required: false},
    nic: {type: Number,required: true},
    salesPerson:{type: Number,required: true}, 
    referenceNumber: {type: String,required: true},
    customerType: {type: String,required: true},
    customer: {type: String,required: true},
    mobile:  {type: Number,required: false},
    email:  {type: String,required: true},
    address: {type: String,required: true},
    status: {type: Number,required: true},
    companyId: {type: Number,required: true},
    createAt: {type: String,required: false},
    updateAt: {type:String,required: false},
    deleteAt: {type:String,required: false}
});

export default mongoose.model<Customer>('erp_hr_customer',CustomerSchema);
  





