const Joi = require('@hapi/joi');

exports.bidCap = (req, res, next) => {
  const { body } = req;
  const schema = Joi.object({
    rpcAlpha: Joi.number().required(),
    rpcBeta: Joi.number().required(),
    ebRpc: Joi.number().required(),
    net: Joi.number().required(),
    nonSocialClicks: Joi.number().required(),
    nonSocialClicksCutOff: Joi.number().required(),
    socialClicks: Joi.number().required(),
    socialClicksCutOff: Joi.number().required(),
    currentBidCap: Joi.number().required(),
    factor: Joi.number().required(),
  });

  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      message: 'Invalid request',
      data: error.details.map(i => i.message).join(',')
    })
  } else {
    next()
  }

}