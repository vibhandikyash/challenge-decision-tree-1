const TYPE = {
  'MIN': 'min',
  'MAX': 'max',
}

const BID_CAP_TYPE = {
  'INCREASE': 'increase',
  'DECREASE': 'decrease',
  'MAX': 'max',
  'MIN': 'min'

}


function BidCapStrategy({ rpcAlpha, rpcBeta, ebRpc, net, nonSocialClicks, nonSocialClicksCutOff, socialClicks, socialClicksCutOff, currentBidCap, factor }) {
  // find avg.
  const avgAlphaBeta = (rpcAlpha + rpcBeta) / 2;

  const getBestBigCap = () => {
    let result = currentBidCap;
    const firstStep = (rpcAlpha > 2.5 && net > 30);
    const secondStep = compareClick();
    const thirdStepMax = findMinMax(TYPE.MAX, secondStep);
    const thirdStepMin = findMinMax(TYPE.MIN, secondStep);

    if (firstStep) {
      if (secondStep) {
        result = thirdStepMax ? calculateBidCap(BID_CAP_TYPE.INCREASE, 1) : calculateBidCap(BID_CAP_TYPE.DECREASE, 4);
      } else {
        result = thirdStepMax ? calculateBidCap(BID_CAP_TYPE.INCREASE, 1) : calculateBidCap(BID_CAP_TYPE.MAX);
      }
    } else {
      if (secondStep) {
        result = thirdStepMin ? calculateBidCap(BID_CAP_TYPE.INCREASE, 5) : calculateBidCap(BID_CAP_TYPE.DECREASE, 5);
      } else {
        result = thirdStepMin ? calculateBidCap(BID_CAP_TYPE.INCREASE, 2) : calculateBidCap(BID_CAP_TYPE.MIN);
      }
    }
    return result;
  }

  const compareClick = () => {
    return ((socialClicks > socialClicksCutOff) && (nonSocialClicks > nonSocialClicksCutOff)) ? true : false;
  }

  const findMinMax = (MATH_TYPE, previousResult) => {
    if (previousResult) {
      return (currentBidCap < Math[MATH_TYPE](ebRpc * factor, avgAlphaBeta)) ? true : false;
    } else {
      return (currentBidCap < Math[MATH_TYPE](ebRpc, avgAlphaBeta)) ? true : false;
    }
  }

  const calculateBidCap = (type, per = null) => {
    if (type === BID_CAP_TYPE.INCREASE) {
      return currentBidCap += (currentBidCap * per / 100)
    }
    if (type === BID_CAP_TYPE.DECREASE) {
      return currentBidCap -= (currentBidCap * per / 100)
    }
    if (type === BID_CAP_TYPE.MAX) {
      return Math.max(ebRpc, avgAlphaBeta)
    }
    if (type === BID_CAP_TYPE.MIN) {
      return Math.min(ebRpc, avgAlphaBeta)
    }
  }

return getBestBigCap();

}


module.exports = BidCapStrategy

