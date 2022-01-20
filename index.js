const express = require("express");
const app = express();
const port = 8080;
// designed using mongoose express and node js
const routes = require("./views/userRoutes");
const mongoose = require("mongoose");

app.use(express.json());

app.use(routes)

mongoose.connect("mongodb+srv://nempro:nempro@cluster0.a9oc6.mongodb.net/edyoda?retryWrites=true&w=majority", {useNewUrlParser: true})
.then( () => {
    console.log(`DB Connected`)
} ).catch( err => {
    console.log(err)
}  )



app.listen( port , () => {
    console.log(`server started running on port ${port}`)
} )