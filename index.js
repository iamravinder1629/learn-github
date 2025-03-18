const express = require('express');
const { userRouter } = require("./routes/userRoutes");
const connectDb = require("./config/dbConnection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("", userRouter);

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
