const express = require('express');
const conn =  require('./libs/Connection');
const employeesRoutes = require("./routes/employeesRoutes");
const app = express();
app.use(express.json());
const api_prefix = process.env.API_PREFIX;
app.use(api_prefix, employeesRoutes);
//app.use(api_prefix, departmentRoutes);
//app.use(api_prefix, customersRoutes);

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
  conn.open();
});