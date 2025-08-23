/* For insert the sample data into database(for testing) */
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/ramble";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // Clear existing data
    await Listing.deleteMany({});
    console.log("Existing data cleared.");

    // Add owner for all listings
    initData.data = initData.data.map((obj) => ({...obj, owner: "1234567890"})); // write the owner id here(at testing time)

    // Insert the updated data into the database
    await Listing.insertMany(initData.data);
    console.log("Data was initialized.");
  } catch (error) {
    console.error("Error initializing data:", error);
  }
};

initDB();