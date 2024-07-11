import { Document } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  displayName: string;
  avatar: string;
  description: string;
  banner: string;
  role: string;
  verified: boolean;
  authProviders: AuthProvider[];
}

interface AuthProvider extends Document {
  provider: "discord" | "local" | "github";
  providerId: string;
}

interface RegisterUserData {
  email: string;
  username: string;
  password: string;
}

export type { IUser, AuthProvider, RegisterUserData };
