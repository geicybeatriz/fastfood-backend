import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../interfaces/errorInterface';

export default function errorHandlerMiddleware(
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  if (error.type === 'not found') return res.status(404).send(error.message);
  if (error.type === 'unprocessable entity')
    return res.status(422).send(error.message);
  if (error.type === 'conflict') return res.status(409).send(error.message);
  if (error.type === 'unauthorized') return res.status(401).send(error.message);

  return res.sendStatus(500);
}
