const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connectDB");
const linkRouter = require("./route/link.route");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/api/v1", (req, res) => {
  return res.send("This is the home page");
});
app.use("/", linkRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startDB();
