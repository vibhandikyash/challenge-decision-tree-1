const BidCapStrategy = require('./BidCapStrategy');

exports.getBidCapValue = async (req, res) => {
  try {

    const bidCap = BidCapStrategy(req.body);

    const data = { bidCap };
    res.send({ success: true, code: 200, data });
  } catch (error) {
    res.send({ success: false, code: 500, message: 'server error' })
  }
};



