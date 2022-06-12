const express = require("express");
const routes = require("../routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require("../routes/index.js"));

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
