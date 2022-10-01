import mongoose, { Schema, Document } from 'mongoose';
export interface IUserData extends Document {
  // _id: String,
  // displayName: string,
  // photoURL?: string,
  email: string,
  password: string,
  // token: string;
  // companyId: number;
  // locationId: number;
  // authenticated: boolean;
  // role: string,
  // status: number,
  // createAt: string,
  // updateAt: string,
  // deleteAt: string
  // userLocations:any[],
  userCompanies:any[],
}
const UserSchema: Schema = new Schema({
  // displayName:{ type: String, required: true, unique: true } ,
  // photoURL: { type: String, required: false},
  email: { type: String, required: true,lowercase: true, unique: true },
  password: { type: String, required: true, unique: false },
  // token: { type: String, required: true, unique: true },
  // companyId: { type: String, required: true, unique: true },
  // locationId: { type: String, required: true, unique: true },
  // authenticated: { type: Number, required: true, unique: false },
  // role: { type: String, required: true },
  // userLocations: [{ type: String, required: true, unique: false }],
  // userCompanies: [{ type: String, required: true, unique: true }],
  // status: { type: Number, required: true, unique: false },
  // createAt: { type: String, required: true, unique: false },
  // updateAt: { type: String, required: false, unique: false },
  // deleteAt: { type: String, required: false, unique: false }
});

export default mongoose.model<IUserData>('erp_inv_user', UserSchema);
