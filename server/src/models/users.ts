import mongoose, { model, Schema } from "mongoose";
import { IUser, AuthProvider } from "../types/user";

const authProviderSchema = new Schema<AuthProvider>(
  {
    provider: {
      type: mongoose.Schema.Types.String,
      enum: ["discord", "github", "local"],
      required: true,
    },
    providerId: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
  },
  { _id: false }
);

const userSchema = new Schema<IUser>(
  {
    email: {
      type: mongoose.Schema.Types.String,
      trim: true,
      unique: true,
    },
    username: {
      type: mongoose.Schema.Types.String,
      trim: true,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    password: {
      type: mongoose.Schema.Types.String,
      trim: true,
    },
    displayName: {
      type: mongoose.Schema.Types.String,
      trim: true,
      maxlength: 25,
    },
    description: {
      type: mongoose.Schema.Types.String,
      trim: true,
      minlength: 20,
      maxlength: 100,
    },
    avatar: {
      type: mongoose.Schema.Types.String,
    },
    banner: {
      type: mongoose.Schema.Types.String,
    },
    role: {
      type: mongoose.Schema.Types.String,
      default: "user",
    },
    verified: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    authProviders: [authProviderSchema]
  },
  { timestamps: true }
);

userSchema.index({ "authProviders.provider": 1, "authProviders.providerId": 1 }, { unique: true });

const User = mongoose.model<IUser>("user", userSchema);

export default User