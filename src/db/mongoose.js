// Start db
// /home/acsabi/mongodb/bin/mongod --dbpath=/home/acsabi/mongodb-data

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
