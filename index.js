import mongodb from 'mongodb';
import dotenv from 'dotenv'
dotenv.config()

mongodb.connect(process.env.CONNECTIONSTRING, function(err, client) {
    
})