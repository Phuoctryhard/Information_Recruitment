const express = require('express')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require('cors'); // Import cors
app.use(cors());
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require('./config/db/index');
db.connect();
const routes = require('./routes');
// kết nối db 
routes(app);


app.listen(5000,()=>{console.log("Server runed")});

