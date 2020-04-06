const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.motdepasse, 8);

    const user = new User({
        prenom: req.body.prenom,
        motdepasse: hashedPassword,
        nom: req.body.nom,
        mail: req.body.mail,
        role: req.body.role,
        admin: req.body.admin
    })

    user.save()
        .then(data => {
            let usertoken = jwt.sign({
                    id: user.mail,
                    admin: user.admin
                },
                "supersecret", {
                    expiresIn: 86400
                }
            )
            res.send({
                auth: true,
                token: usertoken,
                body: {
                    mail: data.mail,
                    prenom: data.prenom
                }
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.login = (req, res) => {
    User.findOne({ mail: req.body.mail },
        function(err, user) {
            if (!user) return res.status(404).send('user inconnu');
            let passwordIsValid = bcrypt.compareSync(req.body.motdepasse, user.motdepasse);
            if (!passwordIsValid) return res.status(401).send({
                auth: false,
                token: null
            });
            let token = jwt.sign({
                    id: user._id,
                    admin: user.admin
                },
                "supersecret", {
                    expiresIn: 86400
                }
            );
            res.status(200).send({
                auth: true,
                token: token,
                data: user
            })
        }
    )
}