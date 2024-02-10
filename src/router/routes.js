const express = require("express");
const router = express.Router();
const Schema = require("../schema/schema");

//============ Api to to get the last booking that has been done=============

router.get("/booking", async (req, res) => {
  try {
    //getting the last booked movie
    const myData = await Schema.find().sort({ createdAt: -1 }).limit(1);

    //If no last booked movie
    if (myData.length === 0) {
      //Sending "No previous Booking found" message if no last booking found
      res
        .status(200)
        .json({ data: null, message: "No previous Booking found!" });
    } else {
      //Sending data if last booking found
      res.status(200).json({ data: myData[0] });
    }
  } catch (error) {
    return res.status(500).json({ error, details: "Internal server error" });
  }
});

//============Api to create a booking for a particular movie=============
router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;

  try {
    //Saving the booking
    const myData = new Schema({ movie, slot, seats });
    const saved = await myData.save();

    res.status(200).json({ data: myData });
  } 
  catch (error) {
      return res.status(500).json({ error, details: "Internal server error" });
  }
});

module.exports = router;
