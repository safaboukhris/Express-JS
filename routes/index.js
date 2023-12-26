const express = require('express');
const router = express.Router();


    // setting our routes
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/Services', (req, res) => {
    res.render('services');
});

router.get('/Contact', (req, res) => {
    res.render('contact');
});

router.get('/*',(req,res) =>{
    res.render('error');
});


module.exports = router;