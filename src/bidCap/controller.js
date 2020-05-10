const BidCapStrategy = require('./BidCapStrategy');

exports.getBidCapValue = async (req, res) => {
  try {

    const bidCapObj = new BidCapStrategy(req.body);
    const bidCap = bidCapObj.getBestBigCap();

    const data = { bidCap };
    res.send({ success: true, code: 200, data });
  } catch (error) {
    res.send({ success: false, code: 500, message: 'server error' })
  }
};



