const express = require('express');
const { userRouter } = require("./routes/userRoutes");
const { ingredientRouter } = require("./routes/ingredientRoutes");
const { cartRouter } = require("./routes/usersCartRoutes");
const connectDb = require("./config/dbConnection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api/users", userRouter); 

app.listen(8000, () => {
    console.log("Listening on port 8000"); 
});
