const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const server = require('../config/express');



//Bid Cap Blog
describe('BidCap', () => {

   describe('/POST BidCap - Success', () => {

      it('Increase Bid Cap by 1%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 1 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Decrease Bid Cap by 4%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap - (body.currentBidCap * 4 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Increase Bid Cap by 1%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 1 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Bid Cap = Max(EBRPC, Avg.(RPC Alpha, RPC Beta))', (done) => {
         const body = {
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
         const bidCap = Math.max(body.ebRpc, (body.rpcAlpha + body.rpcBeta) / 2)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Increase Bid Cap by 5%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 5 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Decrease Bid Cap by 5%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap - (body.currentBidCap * 5 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Increase Bid Cap by 2%', (done) => {
         const body = {
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 2 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });

      it('Bid Cap = Min(EBRPC, Avg.(RPC Alpha, RPC Beta))', (done) => {
         const body = {
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

         const bidCap = Math.min(body.ebRpc, (body.rpcAlpha + body.rpcBeta) / 2)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               (res.body.data.bidCap).should.be.eql(bidCap);
               done();
            });
      });
   });

   describe('/POST BidCap - Fail', () => {
      it('"rpcAlpha" is required', (done) => {
         const body = {
            // "rpcAlpha": 4,
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 1 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(400);
               (res.body).should.be.a('object');
               (res.body.data).should.be.eql('"rpcAlpha" is required');
               done();
            });
      });

      it('"rpcAlpha" is not string', (done) => {
         const body = {
            "rpcAlpha": '12qwe',
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
         const bidCap = body.currentBidCap + (body.currentBidCap * 1 / 100)
         chai.request(server)
            .post('/bid-cap')
            .set('content-type', 'application/json')
            .send(body)
            .end((err, res) => {
               (res).should.have.status(400);
               (res.body).should.be.a('object');
               (res.body.data).should.be.eql('"rpcAlpha" must be a number');
               done();
            });
      });
   });

});
