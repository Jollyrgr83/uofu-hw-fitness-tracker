// require express for server
const express = require("express");
// require mongoose for db and db models
const mongoose = require("mongoose");
// establish port
const PORT = process.env.PORT || 8080;
// set up express
const app = express();
// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// establish static files to be located in public folder
app.use(express.static("public"));
// api and view routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// establish db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// start server and app
app.listen(PORT, () => console.log(`App running on port: ${PORT}!`));
