const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
// Define the directory where your views are located
app.set("views", path.join(__dirname, "views"));


// Use the router for EJS pages
const pagesRouter = require('./router/pages');
app.use('/', pagesRouter);









app.listen(3001, () => {
  console.log("Server running on port 3001");
});
