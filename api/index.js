import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//Create express app instance
const app = express();

//Enable CORS
app.use(cors());

//Middleware to parse JSON bodies
app.use(express.json());

//Connect to MongoDb
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
///////////////////////////////////////////////////////////////////////////////////////////////////

//contact form

//Define Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  message: String,
});

//Create Model
const Contact = mongoose.model("Contact", contactSchema);

//POST Route for submitting contact form
app.post("/submit", async (req, res) => {
  try {
    //Extract form data from request body
    const { name, email, company, message } = req.body;

    //Create new contact instance
    const newContact = new Contact({
      name,
      email,
      company,
      message,
    });

    //Save contact to database
    await newContact.save();

    res.status(200).json({ message: "contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  imageUrl: String,
  title: String,
  rating: String,
  price: String,
});
// Define a Mongoose schema for your enquiry model
const Enquiry = mongoose.model("Enquiry", enquirySchema);

// Handle POST request to /enquiry
app.post("/enquiry", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, message, imageUrl, title, rating, price } = req.body;

    // Create a new Enquiry document
    const enquiry = new Enquiry({
      name,
      email,
      message,
      imageUrl,
      title,
      rating,
      price,
    });

    // Save the enquiry to the database
    await enquiry.save();

    // Respond with a success message
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000!");
});
