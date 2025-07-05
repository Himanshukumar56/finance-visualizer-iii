const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://himanshukhojpur:bDD2XqUij9DRg0Zl@cluster0.nbl31ir.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const transactionsRouter = require('./routes/transactions');
app.use('/transactions', transactionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
