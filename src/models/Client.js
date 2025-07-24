class Client{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getDetails() {
        return `Client Name: ${this.name}, Email: ${this.email}`;
    }
}