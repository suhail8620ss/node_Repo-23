const mongoose = require('mongoose');

async function connection() {
     try {
          await mongoose.connect('mongodb://localhost:27017/batch-3-view');
          console.log("data base connected..");
     } catch (err) {
          console.log();
     }
}
module.exports = connection;

// 1 step