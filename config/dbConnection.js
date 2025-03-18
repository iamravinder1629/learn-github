const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/pizzastore")
        .then(() => { console.log("db connected successfully") })
        .catch(() => { console.log("error connection") })
}
module.exports = connectDb;