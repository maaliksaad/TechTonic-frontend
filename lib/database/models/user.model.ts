import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  photo: { type: String },
});

const User = models?.User || model("User", UserSchema);

export default User;
