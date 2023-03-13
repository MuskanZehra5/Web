import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import todotaskroute from '../routes/items.js';

const app = express();

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 5400;

// const todotaskroute = require('./routes/items');
//connect db
mongoose.connect(process.env.DB_CONNECT).then(()=> console.log("database connected")).catch(err => console.log(err));

app.use('/',todotaskroute)

app.listen(PORT,()=>console.log("Server listening"));
 
