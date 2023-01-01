import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    surName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      index:{unique: true},
    },
    phone: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      min: 3,
      max: 20,
    },
    checkbox: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
