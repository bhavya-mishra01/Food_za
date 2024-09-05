// const mongoose= require('mongoose');
// const mongoURI = 'mongodb+srv://gofoodza:gofoodza@cluster0.ojvqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const mongoDB=async()=>{
//     mongoose.connect(mongoURI,{userNewUrlParser:true},async(err,result)=>{
//        if(err) console.error("...",err)
//        else{
//         console.log("connected");
//        }
//   });
// }

// module.exports=mongoDB;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofoodza:gofoodza@cluster0.ojvqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
async function connectDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectDB();
