const Joi = require("joi");

const experienciesSchemaValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Nombre es requerido",
  }),
  dates: Joi.array()
    .items(
      Joi.object({
        date: Joi.string().required(),
        availables: Joi.number().integer().greater(0).required(),
      })
    )
    .min(1)
    .required(),
});

exports.experiencesValidation = (req, res, next) => {
  const { error } = experienciesSchemaValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
