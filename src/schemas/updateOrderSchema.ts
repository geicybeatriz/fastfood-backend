import Joi from 'joi';

const updateOrderSchema = Joi.object({
  status: Joi.string().valid('cancelled', 'completed').required(),
});

export default updateOrderSchema;
