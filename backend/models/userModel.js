import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required: true, unique:true},
  password: {type: String,required: true,},
  cartData: {type: Object, default:{}} // by default the cart will be one empty object
},{minimize: false}); //so that the cartdata will be created even if it is empty

const userModel = mongoose.models.user  || mongoose.model("user", userSchema);

export default userModel;
