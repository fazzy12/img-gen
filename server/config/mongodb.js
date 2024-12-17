import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log(" databases connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/img-gen`);
};

export default connectDB;