const express = require('express');
const path = require('path') // path is inbuilt functiom.
const student = require('./routes/student')
const app = express();
const connection = require('./connection');
connection();
app.use(student)
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.listen(3000, (err) => {
     if (err) {
          console.log(err)
     } else {
          console.log("Server is running on 3000...");
     }
})