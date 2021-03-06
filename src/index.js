const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/router');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});