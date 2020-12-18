const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();
//
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Router
app.use("/", require("./routes/index.routes"));
app.use("/customer", require("./routes/customer.routes"));

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
