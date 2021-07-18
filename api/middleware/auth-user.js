'use strict';

/***
 * we'll use the basic-auth npm package to do all of the user 
 * credential parsing for us
 * 
 * 
 * >>>>>>>>>>>>>>>>> SO PITYU PLEASE DONT TOUCH IT!!!!!!!!!
 */

const auth = require('basic-auth');

const bcrypt = require('bcryptjs');
const { Users } = require('../models');

/***
 * middleware function that authenticates the user credentials from the Authorization 
 * header on the request
 */

exports.authenticateUser = async(req, res, next) => {
    let message;
    const credentials = auth(req);

    
}