const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://username:username@cluster-event-stream-io.d9ijrws.mongodb.net/";

async function connectToDatabase() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}


async function disconnectToDatabase() {
    const client = new MongoClient(uri);
    try {
        await client.connect(); 
        await client.close();
        console.log("Conexão encerrada.");
    } catch (e) {
        console.error(e);
    }
}


async function createDatabase(dbName, collectionName) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection(collectionName).insertOne({ createdAt: new Date() });
        console.log(`Database '${dbName}' criado com a collection '${collectionName}'. ID: ${result.insertedId}`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


module.exports = {
    connectToDatabase,
    disconnectToDatabase,
    createDatabase
};
