class Event {
    constructor(clientId, payload, destinationUrls) {
                           
        this.clientId = clientId;             
        this.payload = payload;               
        this.status = 'pending';               
        this.attempts = 0;                     
        this.destinationUrls = destinationUrls; 
        this.receivedAt = new Date();          
        this.lastTriedAt = null;               
    }

    markAsSent() {
        this.status = 'sent';
        this.lastTriedAt = new Date();
    }

    markAsFailed() {
        this.status = 'failed';
        this.lastTriedAt = new Date();
        this.attempts++;
    }
}
