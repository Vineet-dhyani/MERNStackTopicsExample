const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const fs = require("mz/fs");
const { app } = require("./../index");
const { mongoose } = require("./../mongoDb");

let files = [];
beforeAll(() => {
  files.push(`${__dirname}/image1.jpg`);
  files.push(`${__dirname}/image2.jpg`);
});

describe("Testing Multiple Drawing Suite", function () {
  test("Testing 1st testcase, Testing path `/` ", async () => {
    await request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).to.equal(200);
      });
  });

  test("Testing 2nd testcase, Testing Status Message ", async () => {
    await request(app)
      .get("/")
      .then((response) => {
        expect(response.res.statusMessage).to.be.equal("OK");
      });
  });

  test("Testing 3rd testcase, Trying to upload All Drawings ", async () => {
    fs.exists(files[0])
      .then(async (exists) => {
        if (!exists) throw new Error("File Does not exists");
        await request(app)
          .post("/sharedrawings")
          .attach("drawings", files[0])
          .attach("drawings", files[1])
          .then((res) => {
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).to.be.equal("All Drawings Submitted!");
          });
      })
      .catch((err) => console.log(err))
      .then(async () => {
        await mongoose.connection.close();
      });
  });
});
