const mongoose = require('mongoose');

async function connect() {
    try {
      
        await mongoose.connect('mongodb://localhost:27017/dulieu', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
        });
        console.log("Kết nối thành công");
    } catch (error) {
        console.error("Kết nối thất bại:", error);
    }
}

module.exports = { connect };
