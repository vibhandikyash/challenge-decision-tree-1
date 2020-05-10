// 1step
exports.by1per = {
  "rpcAlpha": 4,
  "net": 32,
  "socialClicks": 3,
  "socialClicksCutOff": 2,
  "nonSocialClicks": 3,
  "nonSocialClicksCutOff": 2,
  "currentBidCap": 1,
  "ebRpc": 25,
  "factor": 1.45,
  "rpcBeta": 2
}

//2ndStep
const by4per = {
  "rpcAlpha": 4,
  "net": 31,
  "socialClicks": 2,
  "socialClicksCutOff": 1,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 5,
  "ebRpc": 0.01,
  "factor": 0.45,
  "rpcBeta": 2
}

//3 step
const by1per = {
  "rpcAlpha": 4,
  "net": 32,
  "socialClicks": 1,
  "socialClicksCutOff": 4,
  "nonSocialClicks": 3,
  "nonSocialClicksCutOff": 2,
  "currentBidCap": 1,
  "ebRpc": 25,
  "factor": 1.45,
  "rpcBeta": 2
}

// 4 step
const bidcapmax = {
  "rpcAlpha": 4,
  "net": 31,
  "socialClicks": 1,
  "socialClicksCutOff": 3,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 4,
  "ebRpc": 1,
  "factor": 1.45,
  "rpcBeta": 2
}

// 5 step
const by5per = {
  "rpcAlpha": 2,
  "net": 2,
  "socialClicks": 2,
  "socialClicksCutOff": 1,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 1,
  "ebRpc": 3,
  "factor": 0.45,
  "rpcBeta": 2
}

// 6 step
const by5per = {
  "rpcAlpha": 2,
  "net": 2,
  "socialClicks": 2,
  "socialClicksCutOff": 1,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 5,
  "ebRpc": 0.01,
  "factor": 0.45,
  "rpcBeta": 2
}

// 7step
const by2per = {
  "rpcAlpha": 2,
  "net": 2,
  "socialClicks": 1,
  "socialClicksCutOff": 2,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 1,
  "ebRpc": 3,
  "factor": 0.45,
  "rpcBeta": 2
}

// 8step
const bidcapmin = {
  "rpcAlpha": 2,
  "net": 2,
  "socialClicks": 1,
  "socialClicksCutOff": 2,
  "nonSocialClicks": 2,
  "nonSocialClicksCutOff": 1,
  "currentBidCap": 1,
  "ebRpc": 0.01,
  "factor": 0.45,
  "rpcBeta": 2
}

