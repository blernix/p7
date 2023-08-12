const express = require('express'); 

const User = require ('./models/User');

const userRoutes = require('./routes/users');



const app = express(); 




const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kiki:mdptest@cluster0.rrr7vop.mongodb.net/books?retryWrites=true&w=majority',

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

  

module.exports = app;
