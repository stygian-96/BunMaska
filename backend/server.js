const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const bodyParser = require('body-parser')
// const routes = require('./routes/index')

require('dotenv').config()

connectDB();

const app = express();

if(process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} node on port ${PORT}`))