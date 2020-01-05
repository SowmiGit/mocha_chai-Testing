import planetData from './Planet';
import chai from 'chai';
import chaiHttp from 'chai-http';
const expect  = require('chai').expect;
const should  = require('chai').should;

chai.use(chaiHttp);
chai.should();

describe("Planet", () => {
    describe ("GET name of the planet", () => {
        //Test the name of the planet status
        it("should be a string", (done) => {
            chai.request(Planet)
            .get('/')
            .end((err,res) => {
                res.should.have.status(200);
                res.should.be.a('String');
                done();
            })
        })
        //Test the name of the planet status 
        it("should be a string", (done) => {
            chai.request(Planet)
            .get('/')
            .end((err,res) => {
                res.should.have.status(200);
                res.should.be.a('Int');
                done();
            })
        })
    })
})

export default PlanetTest;