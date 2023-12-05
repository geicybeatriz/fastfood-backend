import { Router } from 'express';
import { getAllAdditionals } from '../controllers/additionalsControler';

const additionalRouter = Router();

additionalRouter.get('/', getAllAdditionals);

export default additionalRouter;
