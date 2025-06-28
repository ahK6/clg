const Joi = require("joi");

const reservationsSchemaValidation = Joi.object({
  experiencieDateId: Joi.string().required().messages({
    "any.required": "Fecha del evento es requerido",
  }),
  userId: Joi.string().required().messages({
    "any.required": "Usuario que hace reserva es requerido",
  }),
  quantity: Joi.number().integer().greater(0).required().messages({
    "number.base": "Cantidad debe ser un número",
    "number.greater": "Cantidad debe ser mayor que 0",
    "any.required": "Cantidad de cupos es requerido",
  }),
});

exports.reservationsValidation = (req, res, next) => {
  const { error } = reservationsSchemaValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
