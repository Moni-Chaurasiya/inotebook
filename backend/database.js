// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/inotebook"; // Include the database name
// const connectToMongo = () => {
//   mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => {
//       console.log("Connected to Mongo Successfully");
//     }
//   );
// };
// module.exports = connectToMongo;
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook"; // Include the database name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Failed to connect to Mongo:", error);
  }
};

module.exports = connectToMongo;
