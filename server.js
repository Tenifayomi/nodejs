// var os = require('os')
//console.log(os)
//console.log(os.version())


//var HTTP = require('http');

//console.log(HTTP)

// const PORT = 5000

// const server = HTTP.createServer((req, res)=>{
    
// res.setHeader('content', 'html')
// if(req.url === '/login'){
//     res.end('<h2>This is the log in route</h2>')
// }else if(req.url==='/'){ 
// res.end('<h1>Server Home Page</h1>') }
// })
 
// server.listen(PORT,() =>{
//     console.log(`Server is now running on port: ${PORT}`);
// })

var express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const productRoute = require('./Routes/productRoutes')
const cors = require('cors')
const userRoute = require('./Routes/userRoutes')
const cookie_parser = require('cookie-parser')
const path = require('path')
const serverPath = path.resolve(__dirname, 'server.js')
require(serverPath)

app.get('/', (req, res) => {
    res.send('Server Homepage')
} )

// Middleware
app.use(cookie_parser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:true}))




app.use('/', productRoute)
app.use('/', userRoute)

mongoose.connect(process.env.mongo_url)
.then(()=>{
    app.listen(5000,()=>{
        console.log('Server now listening to port 5000');
    })
}).catch((error)=>{
    console.log(error);
})



//you can declare a variable for the port number for express too