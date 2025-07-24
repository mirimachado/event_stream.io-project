class Event{
    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location;
    }
    
    getDetails() {
        return `Event: ${this.name}, Date: ${this.date}, Location: ${this.location}`;
    }
}