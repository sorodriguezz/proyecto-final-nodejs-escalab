const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('MongoDB Connected...');
    }catch (error) {
        console.log("DB CONNECTION ERROR: ", error);
        process.exit(1);
    }
};

module.exports = connectDb;