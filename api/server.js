const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const transactionsRouter = require('./routes/transactions');
const budgetsRouter = require('./routes/budgets');

app.use('/api/transactions', transactionsRouter);
app.use('/api/budgets', budgetsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;
