const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); 
const expect = chai.expect;

chai.use(chaiHttp);

describe("API Tests", () => {
  let lastBookingId;

  // Testing GET /booking
  describe("GET /booking", () => {
    it("should return the last booking", (done) => {
      chai.request(app)
        .get("/booking")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.have.property("_id");
          lastBookingId = res.body.data._id; // Saving last booking id for future tests
          done();
        });
    });
  });

  // Testing POST /booking
  describe("POST /booking", () => {
    it("should create a new booking", (done) => {
      const newBooking = {
        movie: "Moonfall",
        slot: "01:00 PM",
        seats: {
          A1: 5,
          A2: 1,
          A3: 0,
          A4: 0,
          D1: 0,
          D2: 0,
        },
      };

      chai.request(app)
        .post("/booking")
        .send(newBooking)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.have.property("_id");
          done();
        });
    });
  });

  // Additional tests can be added as needed

  // Cleanup after tests if necessary
  after(async () => {

  });
});
