const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://rishabh:xoPKpdr3YqW1tNl0@cluster0.y8ac2no.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
