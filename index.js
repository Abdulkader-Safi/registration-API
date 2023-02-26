const express = require("express");
const DB = require("./database").connectDB; // import database

const app = express();
const port = process.env.PORT || 3001;

// Connect to Database
DB();

app.use(express.json());
app.listen(port, () => {
  console.log(`\n\nListening on port: ${port} \nhttp://localhost:${port}/ \n\n`);
});
