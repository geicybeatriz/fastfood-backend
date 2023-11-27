import Joi from 'joi';

const addProductSchema = Joi.object({
  orderId: Joi.number(),
  productId: Joi.number().required(),
  quantity: Joi.number().required(),
  observations: Joi.string(),
  additionals: Joi.array().items(Joi.number()),
});

const orderSchemas = {
  addProductSchema,
};

export default orderSchemas;
