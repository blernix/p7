const express = require ('express');

const router =  express.Router();

const auth = require('../middleware/auth');

const Books = require('../models/Books');
const multer = require("../middleware/multer-config");

const bookCtrl = require ('../controllers/books');

router.get("/", bookCtrl.getBooks);
router.post("/", auth, multer, bookCtrl.createBooks);
router.get("/bestrating", bookCtrl.bestRatings);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.post("/:id/rating", auth, bookCtrl.rating);

module.exports = router;