const express = require('express'); 

const User = require ('./models/User');

const userRoutes = require('./routes/users');

const Books = require ('./models/Books');

const booksRoutes = require ('./routes/books');

require('dotenv').config();

const path = require('path');



const app = express(); 




const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url,

{ useNewUrlParser: true,
	useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));

 app.use(express.json());
  app.use(express.urlencoded({extended : true}));


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
  });

  
  app.use('/api/auth', userRoutes);

  app.use('/api/books', booksRoutes);

  app.use("/images", express.static(path.join(__dirname, "images")));
  

module.exports = app;
