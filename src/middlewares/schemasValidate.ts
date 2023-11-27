import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { CustomError } from '../interfaces/errorInterface';

export default function schemasValidate(schema: Joi.ObjectSchema) {
  // eslint-disable-next-line consistent-return
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res
        .status(422)
        .send(error.details.map((detail: CustomError) => detail.message));
    }
    next();
  };
}
