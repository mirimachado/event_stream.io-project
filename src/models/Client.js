class Client {
    constructor(name, email, apiKey) {
                       
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

