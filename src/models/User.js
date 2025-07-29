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
