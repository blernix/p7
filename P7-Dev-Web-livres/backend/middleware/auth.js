const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        console.log(process.env.TOKEN_KEY);
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const userId = decodedToken.userId;

        if( req.body.userId && req.body.userId !== userId ) {
            throw 'User ID non valable !';
        } else {
            req.auth = {
                userId: userId, // Ajouter l'ID de l'utilisateur à l'objet 'auth' de la requête
              };
            next();
        }
    } catch(error) {
        res.status(401).json({ error: error || 'Requête non authentifiée !' });
    }
};