const express = require('express')
const cors = require('cors')
const  routerSwiggy  = require('./SwiggyRouter')
 
const PORT = 3000
const app = express()
app.use(cors())

app.use('/swiggy',routerSwiggy)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})