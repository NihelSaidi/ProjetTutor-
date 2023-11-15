const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/projetTuto')
.then(() => {
    app.listen(process.env.PORT || 3100, () => {
        console.log('Server is running on port', process.env.PORT || 3100);
    });
})
.catch(err => {
    console.error('Errore connecting to the database:', err);
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});







app.post("/users", (req, res) => {

    console.log("here in create user", req.body); // bch yokhrejli fi serveur mta3 back

    let user = {};
    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {

            if (resultEmail) {
                res.status(200).json({
                    message: "that email has already registered ,please use a different email"
                });
            }

            else {

                bcrypt.hash(req.body.password, 10).then(cryptedPwd => {

                  

                    
                        user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: cryptedPwd,
                            tel: req.body.tel,
                           
                        });
                    

                    //sauvegarde (save()est une foncion prédéfinies du mongodb) 
                    user.save();
                    //retour de la requete (reponse)
                    // 200 status de cuccès de la req
                    res.status(200).json({
                        message: "User created"
                    })
                })
            }
        }
    )

});


//export app
module.exports = app;
