class Client {
    constructor(id, name, email, apiKey) {
        this.id = id;                      
        this.name = name;                  
        this.email = email;                
        this.apiKey = apiKey;             
        this.webhooks = [];                
        this.createdAt = new Date();       
    }

    addWebhook(url) {
        this.webhooks.push(url);
    }

    getDetails() {
        return `Client: ${this.name}, Email: ${this.email}, Webhooks: ${this.webhooks.length}`;
    }
}

