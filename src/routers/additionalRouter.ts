import { getAllAdditionals } from 'controllers/additionalsControler';
import { Router } from 'express';

const additionalRouter = Router();

additionalRouter.get('/', getAllAdditionals);

export default additionalRouter;
