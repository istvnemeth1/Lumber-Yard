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

/***
 * middleware function that authenticates the user credentials from the Authorization 
 * header on the request
 */
 exports.authenticateUser = async (req, res, next) => {
    let message;
    const credentials = auth(req);
 
    if (credentials) {
        const user = await Users.findOne({
          where: { email: credentials.name },
        });
        if (user) {
          const authenticated = bcrypt.compareSync(credentials.pass, user.password);
          if (authenticated) {
            console.log(
              `Authentication successful for user: ${user.userName}`
            );
    
            // Store the user on the Request object.
            req.currentUser = user;
          } else {
            message = `Authentication failure for username: ${user.userName}`;
          }
        } else {
          message = `User not found for: ${credentials.name}`;
        }
      } else {
        message = "Auth header not found";
      }
    
      if (message) {
        console.log(message);
        res.status(401).json({ message: "Access Denied" });
      } else {
        next();
      }
}