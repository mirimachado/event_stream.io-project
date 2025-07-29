class User{
    constructor(name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = '';
        this.role = 'user';
        this.createdAt = new Date();
        this.username = '';
        this.token = '';

    }

    
    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }
    
    setName(name) {
        this.name = name;
    }
    
    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }
    setRole(role) {
        this.role = role;
    }
    getRole() {
        return this.role;
    }
    getCreatedAt() {
        return this.createdAt;
    }

    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    getDetails() {
        return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}, Created At: ${this.createdAt}`;
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
}