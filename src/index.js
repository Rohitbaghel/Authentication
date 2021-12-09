const express = require('express');

const {register,login} = require('./controller/user.controller')

const post = require('./controller/post.controller')

const app = express();

app.use(express.json())
app.use("/register",register)


app.use("/login",login)
app.use("/post",post)


module.exports =app;