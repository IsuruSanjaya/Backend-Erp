import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseItem extends Document {
  _id: string,
  itemName: string,
  quantity: number,
  unitPrice: number,
  unitDiscount: number,
  unitTax: number,
  PhurchaseId: number,
  unitTaxAmount: number,
  status: number,
  companyId: number,
  createAt: string,
  updateAt: string,
  deleteAt: string
}

const PhurchaseItemsSchema: Schema = new Schema({
    itemName: {type: String},
    quantity: {type: Number},
    unitPrice: {type: Number},
    unitDiscount: {type: Number}, 
    unitTax: {type: Number},
    PhurchaseId: {type: Number, required: true},
    unitTaxAmount:{type: Number},
    status: { type: Number, required: true, unique: false },
    companyId: {type: Number,required: true},
    createAt: { type: String, required: false, unique: false },
    updateAt: { type: String, required: false, unique: false },
    deleteAt: { type: String, required: false, unique: false }
});

export default mongoose.model<PhurchaseItem>('erp_sal_Phurchase_Items',PhurchaseItemsSchema);
 
