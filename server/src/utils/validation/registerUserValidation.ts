import Joi from "joi";
import { RegisterUserData } from "../../types/user";

const registerUserValidation = (data: RegisterUserData) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .empty()
      .required()
      .email({ tlds: { allow: false } })
      .trim()
      .messages({
        "string.empty": "Email address cannot be empty",
        "any.required": "Email address is required",
        "string.email": "Please enter a valid email address",
        "string.trim": "Email address cannot start or end with spaces",
      }),
    username: Joi.string()
      .empty()
      .required()
      .trim()
      .min(5)
      .max(20)
      .regex(/^(?!.*\s)[a-zA-Z0-9_-]{4,20}$/)
      .messages({
        "string.empty": "Username cannot be empty",
        "any.required": "Username is required",
        "string.min": "Username must be at least {#limit} characters long",
        "string.max": "Username cannot exceed {#limit} characters",
        "string.pattern.base":
          "Username must be between 4 and 20 characters, and not contain any special characters",
        "string.trim": "Username cannot start or end with spaces",
      }),
    password: Joi.string()
      .empty()
      .required()
      .trim()
      .min(8)
      .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@#$%^&*.]{8,25}$/)
      .messages({
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required",
        "string.min": "Password must be at least 8 characters long",
        "string.pattern.base":
          "Password is not strong enough. It must contain at least one uppercase letter, one number, and one special character (!@#$%^&*.), and be between 8 and 25 characters long",
        "string.trim": "Password cannot start or end with spaces",
      }),
  });

  return schema.validate(data);
};

export default registerUserValidation;
