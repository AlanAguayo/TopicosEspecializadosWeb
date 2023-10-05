const express = require('express');
const conn =  require('./libs/Connection');
const employeesRoutes = require("./routes/employeesRoutes");
const usersRoutes = require("./routes/usersRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const app = express();
var cors = require('cors');

app.use(cors());

app.use(express.json());
const api_prefix = process.env.API_PREFIX;
app.use(api_prefix, employeesRoutes);
app.use(api_prefix, usersRoutes);
app.use(api_prefix, ordersRoutes);


const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
  conn.open();
});