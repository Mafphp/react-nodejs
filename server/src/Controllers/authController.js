const userRepository = require('../Repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = require('../../env');

class AuthController {
    constructor() {}
    async login(req, res) {
        console.log('aaaaaaaaaaaaaa');
      try {
        const {username, password} = req.body;
        if (!username || !password) {
            throw new Error('invalid data passed')
        }
        const user = await userRepository.getBy({username});
        if (!user) {
            throw new Error(`not found any user with this username`);
        }
        // compare password
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) {
            throw new Error('username or password incorrect');
        }
        const token = AuthController.generateAccessToken({username});
        req.user = token;
        res.send(token);
      } catch (e) {
        res.status(400).send(e.message).end();
      }
    }
    static generateAccessToken(username) {
        return jwt.sign({username}, ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
    }
    logout(req, res) {
        req.session.destroy();
        res.redirect('/home');
    }
    register() {}
    refreshToken() {}
    verifyToken(req, res) {
        if (req.user) {
            return res.send(jwt.verify(req.user, process.env.ACCESS_TOKEN_SECRET));
        }
        return res.status(500).send(null);
    }
}

module.exports = new AuthController();