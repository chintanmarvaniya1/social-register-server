
require("dotenv").config();
//const connectDB = require('./config/dbConnection');
const app = require('./app');

//connectDB();

app.listen(process.env.PORT, () => {
  console.log(`🔥 Express running → On PORT : ${process.env.PORT}`);
});
