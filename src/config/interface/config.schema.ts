import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  WB_URL: Joi.string().required(),
  WEBHOOK_VERIFY_TOKEN: Joi.string().required(),
  GRAPH_API_TOKEN: Joi.string().required(),
  TWITTER_API_KEY: Joi.string().required(),
  TWITTER_API_SECRET: Joi.string().required(),
  TWITTER_ACCESS_TOKEN: Joi.string().required(),
  TWITTER_ACCESS_TOKEN_SECRET: Joi.string().required(),
  BSKY_IDENTIFIER: Joi.string().required(),
  BSKY_PASSWORD: Joi.string().required(),
});
