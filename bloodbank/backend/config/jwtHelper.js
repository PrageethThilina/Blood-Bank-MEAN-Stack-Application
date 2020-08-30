const hospitaljwt = require('jsonwebtoken');
const donorjwt = require('jsonwebtoken');
const doneejwt = require('jsonwebtoken');
const adminjwt = require('jsonwebtoken');

//admin verify the token
module.exports.adminverifyJwtToken = (req, res, next) => {
    var admintoken;
    if ('authorization' in req.headers)
    admintoken = req.headers['authorization'].split(' ')[1];

    if (!admintoken)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        adminjwt.verify(admintoken, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}

//donee verify the token
module.exports.doneeverifyJwtToken = (req, res, next) => {
    var doneetoken;
    if ('authorization' in req.headers)
    doneetoken = req.headers['authorization'].split(' ')[1];

    if (!doneetoken)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        doneejwt.verify(doneetoken, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}

//donor verify the token
module.exports.donorverifyJwtToken = (req, res, next) => {
    var donortoken;
    if ('authorization' in req.headers)
    donortoken = req.headers['authorization'].split(' ')[1];

    if (!donortoken)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        donorjwt.verify(donortoken, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    req.donor_nic = decoded.donor_nic;
                    req.email = decoded.email;
                    next();
                }
            }
        )
    }
}

//hospital verify the token
module.exports.hospitalverifyJwtToken = (req, res, next) => {
    var hospitaltoken;
    if ('authorization' in req.headers)
    hospitaltoken = req.headers['authorization'].split(' ')[1];

    if (!hospitaltoken)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        hospitaljwt.verify(hospitaltoken, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}