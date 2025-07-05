const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Load environment variables from .env file in the server directory
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// console.log("Connecting to MongoDB with URI:", uri);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const transactionsRouter = require("./routes/transactions");
app.use("/api/transactions", transactionsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
