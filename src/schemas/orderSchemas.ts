import Joi from 'joi';

const orderSchema = Joi.object({
  name: Joi.string().required,
  payment: Joi.string().required,
  productsList: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().required(),
        quantity: Joi.number().required(),
        observations: Joi.string(),
        additionals: Joi.array().items(Joi.number()),
      }),
    )
    .min(1),
});

export default orderSchema;
