const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');

// custom middleware to verify the time 
const VerifyHours = (req, res, next) => {
    const currentDay = new Date().getDay(); 
    const currentHour = new Date().getHours();
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next();
    } else {
        res.status(403).send('We apologize, access is limited to operating hours (Monday through Friday, 9 AM to 5 PM).');
        console.log(`it's not between (Monday through Friday, 9 AM to 5 PM)`)
    }
};
    app.use(VerifyHours);

    // setting the Pug view engine
        app.set('view engine','pug');
        app.set('views','./views');
    // using cookie-parser middleware   
        app.use(cookieParser())
        app.use(express.static('public'));

        app.use(express.static('public'));
    // Setting routes
        app.use('/',routes)
    //create a server
app.listen(port,() => {
    console.log('server is running at port:', port)
});

