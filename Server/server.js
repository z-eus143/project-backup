const express = require("express")
const port = 4000
const app = express()
const cors = require('cors')
const authRouter = require("./Routes/auth")
const { json } = require("body-parser")
const userDate = require("./Routes/createUser")
const mongoose = require('mongoose')

app.use(json({limit: '50mb'}))
app.use(cors())

app.get("/" , (req,res) => {
    res.send("Hello")
})

app.use("/auth", authRouter)
app.use("/create", userDate)



mongoose.connect("mongodb://0.0.0.0:27017/RentalArc")
.then(() => {
    app.listen(port ,  () => {
        console.log(`Server started at port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})
