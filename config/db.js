// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };


// module.exports = connectDB;



//final 28
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected...");

//     // Test the database connection
//     const connectionStatus = await mongoose.connection.db.admin().ping();
//     console.log("MongoDB connection status:", connectionStatus);
//   } catch (err) {
//     console.error("Database connection error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;





//SHREYANSH DB 
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
 



const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Can be removed
      useUnifiedTopology: true, // Can be removed
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
