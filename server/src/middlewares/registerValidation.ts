import { Request, Response, NextFunction } from "express";
import registerUserValidation from "../utils/validation/registerUserValidation";
import errorResponse from "../utils/response/errorResponse";

const registerValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = registerUserValidation(req.body);
  if (data.error) {
    return res.status(400).send(errorResponse(400,"BAD_CREDENTIALS",data.error.message))
  }

  next()
};

export default registerValidation;
