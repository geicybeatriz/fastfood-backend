import { Additional } from '@prisma/client';
import prisma from '../config/database';

async function findAdditionalById(id: number) {
  const additional: Additional = await prisma.additional.findFirst({
    where: { id },
  });
  return additional;
}

async function findAll() {
  const additionals: Additional[] = await prisma.additional.findMany();
  return additionals;
}

const additionalRepository = {
  findAdditionalById,
  findAll,
};

export default additionalRepository;
