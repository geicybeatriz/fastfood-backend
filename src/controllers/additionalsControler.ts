import { Additional } from '@prisma/client';
import { Request, Response } from 'express';
import orderAdditionalService from '../services/additionalsServices';

export async function getAllAdditionals(req: Request, res: Response) {
  const additionals: Additional[] =
    await orderAdditionalService.findAllAdditionals();
  res.status(200).send(additionals);
}
