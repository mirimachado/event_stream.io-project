const { response } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const user = {
    id: 1,
    name: "miria",
    email: "email@testemiria",
    permissions: ['admin']
};

const token = jwt.sign(user, 'secret-key');
const decoded = jwt.verify(token, 'secret-key');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret-key'
};

passport.use(new JwtStrategy(options, (payload, done) => {
    User.findById(payload.sub).then(user => {
        if(user){
            return done(null, user);
        } else {
            return done(null, false)
        }
    }) .catch(error => done(error, false));

}));

router.post('/login', (request, response) => {
    const user = {id: 1, name: 'miria'};
    const token = jwt.sign(user, 'jwt-secret');
    response.json({ token });
});

router.get('/protected', passport.authenticate('jwt', {session: false}), (request, response) => {
    response.json({ message: 'Essa é uma rota protegida!'})
})

