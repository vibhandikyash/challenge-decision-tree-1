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

module.exports = class BidCapStrategy {
  constructor({ rpcAlpha, rpcBeta, ebRpc, net, nonSocialClicks, nonSocialClicksCutOff, socialClicks, socialClicksCutOff, currentBidCap, factor }) {
    this.rpcAlpha = rpcAlpha;
    this.rpcBeta = rpcBeta;
    this.ebRpc = ebRpc;
    this.net = net;
    this.nonSocialClicks = nonSocialClicks;
    this.nonSocialClicksCutOff = nonSocialClicksCutOff;
    this.socialClicks = socialClicks;
    this.socialClicksCutOff = socialClicksCutOff;
    this.currentBidCap = currentBidCap;
    this.factor = factor;

    // find avg.
    this.avgAlphaBeta = (this.rpcAlpha + this.rpcBeta) / 2;
  }

  getBestBigCap() {
    let result = this.currentBidCap;
    const firstStep = (this.rpcAlpha > 2.5 && this.net > 30);
    const secondStep = this.compareClick();
    const thirdStepMax = this.findMinMax(TYPE.MAX, secondStep);
    const thirdStepMin = this.findMinMax(TYPE.MIN, secondStep);

    if (firstStep) {
      if (secondStep) {
        result = thirdStepMax ? this.calculateBidCap(BID_CAP_TYPE.INCREASE, 1) : this.calculateBidCap(BID_CAP_TYPE.DECREASE, 4);
      } else {
        result = thirdStepMax ? this.calculateBidCap(BID_CAP_TYPE.INCREASE, 1) : this.calculateBidCap(BID_CAP_TYPE.MAX);
      }
    } else {
      if (secondStep) {
        result = thirdStepMin ? this.calculateBidCap(BID_CAP_TYPE.INCREASE, 5) : this.calculateBidCap(BID_CAP_TYPE.DECREASE, 5);
      } else {
        result = thirdStepMin ? this.calculateBidCap(BID_CAP_TYPE.INCREASE, 2) : this.calculateBidCap(BID_CAP_TYPE.MIN);
      }
    }
    return result;
  }

  compareClick() {
    return ((this.socialClicks > this.socialClicksCutOff) && (this.nonSocialClicks > this.nonSocialClicksCutOff)) ? true : false;
  }

  findMinMax(MATH_TYPE, previousResult) {
    if (previousResult) {
      return (this.currentBidCap < Math[MATH_TYPE](this.ebRpc * this.factor, this.avgAlphaBeta)) ? true : false;
    } else {
      return (this.currentBidCap < Math[MATH_TYPE](this.ebRpc, this.avgAlphaBeta)) ? true : false;
    }
  }

  calculateBidCap(type, per = null) {
    if (type === BID_CAP_TYPE.INCREASE) {
      return this.currentBidCap += (this.currentBidCap * per / 100)
    }
    if (type === BID_CAP_TYPE.DECREASE) {
      return this.currentBidCap -= (this.currentBidCap * per / 100)
    }
    if (type === BID_CAP_TYPE.MAX) {
      return Math.max(this.ebRpc, this.avgAlphaBeta)
    }
    if (type === BID_CAP_TYPE.MIN) {
      return Math.min(this.ebRpc, this.avgAlphaBeta)
    }
  }


}