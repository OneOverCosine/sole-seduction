import mongoose from 'mongoose';
import environmentConfig from './environmentConfig.js';

environmentConfig;

const dbConnect = async () => {
    mongoose
        .connect(process.env.DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        .then(() => {
            console.log('MongoDB connection established successfully');
        })
        .catch(err => {
            console.log('Unable to connect to MongoDB');
            console.error(err);
        });
};

export default dbConnect; 