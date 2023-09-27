import mongoose from "mongoose";
let isConnected = false;     // track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("connected to db");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("connected to db");

    } catch (error) {
        console.log(error);
    }
}