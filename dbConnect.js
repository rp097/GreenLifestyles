require('dotenv').config()

//Database Connections

const MongoClient = require('mongoDb').MongoClient;


const uri = 'mongodb+srv://group4:group4321@greenlifestylescluster.bvsakmv.mongodb.net/?retryWrites=true&w=majority'
const client =  new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
    //projectCollection = client.db().collection(collectionName);
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.exports = client;