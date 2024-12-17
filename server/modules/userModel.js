import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { Types: string, required: true },
  email: { Types: string, required: true, unique: true },
  password: { Types: string, required: true },
  creditBalnce: { Types: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;  