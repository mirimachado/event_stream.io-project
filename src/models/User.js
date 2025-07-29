class User {
    constructor( name, email, username) {
                           
        this.name = name;                  
        this.email = email;                
        this.username = username;          
        this.password = '';                
        this.role = 'user';                
        this.createdAt = new Date();       
    }

    setPassword(passwordHash) {
        this.password = passwordHash;
    }

    setRole(role) {
        this.role = role;
    }

    getDetails() {
        return `User: ${this.name}, Role: ${this.role}, Created At: ${this.createdAt}`;
    }
}

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    permissions: [String]
});

module.exports = mongoose.model('User', userSchema);

