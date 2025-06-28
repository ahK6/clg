const Joi = require("joi");

const signupSchemaValidation = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "Email es requerido",
  }),
  name: Joi.string().required().messages({
    "any.required": "Nombre es requerido",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "Contraseña es requerida",
    "string.min": "La contraseña debe tener al menos 8 caracteres",
  }),
});

exports.signupValidation = (req, res, next) => {
  const { error } = signupSchemaValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const loginSchemaValidation = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "email es requerido",
  }),
  password: Joi.string().required().messages({
    "any.required": "Contrasena es requerida",
  }),
});

exports.loginValidation = (req, res, next) => {
  const { error } = loginSchemaValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
