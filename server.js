const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("./db/mongodb.connect");

mongodb.connect();

app.listen(process.env.PORT || 3000, () => {
  console.log("app listening on port 3000");
});
