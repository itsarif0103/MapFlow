const express =  require("express");
const mongoose =  require("mongoose");
const dotenv =  require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const app = express();
dotenv.config();
// mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose 
 .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () =>{
    console.log("Backend server is running!");
    
})