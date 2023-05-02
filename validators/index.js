import Joi from 'joi';

export const numberSchema = Joi.object({
    number: Joi.number().integer().min(1).max(100).required(),
});