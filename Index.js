// // var express = require('express')
// // var app = express()
// // var router = express.Router()

// // app.use(function (req, res, next) {
// //   console.log('Time:', Date.now())
// //   next()
// // })

// // app.post('/user/:id', function (req, res, next) {
// //   console.log('Request URL:', req.originalUrl)
// //   next()
// // }, function (req, res, next) {
// //   console.log('Request Type:', req.method);
// //   res.send("hello")
// //   next()
// // })

// // app.get('/user/:id', function (req, res, next) {
// //   if (req.params.id === '0') next('route')
// //   else next()
// // }, function (req, res, next) {
// //   res.send('regular')
// // })
// // // app.set('view engine','jade');

// // app.get('/user/:id', function (req, res, next) {
// //   console.log(req.params.id)
// //   res.send('special')
// // })

// // app.listen(5000,()=>{
// //     console.log("connected....");
// // })
// const express=require('express');
// const app=express();
// const PORT=3000;

// app.use((req,res,next)=>
// {
//   console.log(`middleware is executing `);
//   next()
// })

// app.get('/signup/:user/:id/',(req,res,next)=>{
//   console.log(`hellooo`);
//   res.send(`middleware is executing`);
//   next();
// })


// app.post('/signup/:user/:id/',(req,res,next)=>{
//   if(req.params.id==='4')
//   next('route')
//   else
//   next()
// },function(req,res){
//  res.send(`Welcome regular user`);
// })

// app.post('/signup/:user/:id/',(req,res)=>{
//    res.send(`Welcome ${req.params.user}`);
// })



// app.listen(PORT,(req,res)=>{
//   console.log(`server is running at ${PORT}..........`)
// })
const express =require('express');
const bodyParser=require('body-parser');
const PORT =3000;
const mongoose=require('mongoose');
const {mongoUrl}=require('./keys')


const app=express();

require('./user');
const requireToken=require('./middleware/requireToken')
const auth=require('./routes/auth');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method==='OPTIONS')
   { 
       req.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
    return res.status(200).json({});
    }
});
app.use(auth)


mongoose.connect(mongoUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true
})
mongoose.connection.on('connected',()=>{
    console.log("Database connected")
})
mongoose.connection.on('error',(err)=>{
    console.log("Database not connected",err)
})


app.get('/',requireToken,(req,res)=>{
    res.send(`Welcome `+req.user.email);
})
app.post('/',requireToken,(req,res)=>{
    console.log(req.body);
    res.send(`Welcome User with post request ${req.user.email}`);
})
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})