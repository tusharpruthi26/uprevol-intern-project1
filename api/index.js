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

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000!");
});
