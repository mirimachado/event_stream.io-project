const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();


router.post('/login', async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const payload = {
        id: user._id,
        name: user.name,
        permissions: user.permissions
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});


router.get('/protected',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({ message: 'Rota protegida acessada!', user: req.user });
    }
);

module.exports = router;
