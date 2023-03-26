require("dotenv").config();
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')
const publisherRoute = require('./routes/publisherRoute')

const cors = require("cors");
app.use(cors());
app.use(express.json());

//const uri = process.env.MONGO_URL;
//const uri = `mongodb://localhost:27017/`


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookshop');
}

// const verifyToken = (req, res, next) =>{
//     const authHeaderToken = req.headers.authorization;

//     if(!authHeaderToken){
//         return res.status(401).send({message: 'unauthorized access'});
//     }
//     const token = authHeaderToken.split(' ')[1];

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded){
//         if(err){
//             return res.status(403).send({message: 'Forbidden access'});
//         }
//         req.decoded = decoded;
//         next();
//     })
// }

// app.post('/jsonToken', (req, res) =>{
//     const user = req.body;
//     const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'})
//     res.send({token})
// })

// const checkRole = async (req, res, next) => {
//     const decodedEmail = req.decoded.email;
//     const query = { email: decodedEmail };
//     const user = await usersCollection.findOne(query);
  
//     if (user?.role !== 'admin') {
//       return res.status(403).send({ message: 'forbidden access' })
//     }
//     next();
//   }
  


app.get("/", (req, res) => {
  res.send("Welcome to BookShop Server!");
});

app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/author', authorRoutes);
app.use('/publisher', publisherRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});