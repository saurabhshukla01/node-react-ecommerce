const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// const connectDB = async () => {
//     mongoose.connect("mongodb://localhost:27001/e-comm");
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// const mongoose = require("mongoose");
// connectDB();

mongoose.connect("mongodb://localhost:27017/e-comm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected successfully!");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.get("/",(req,resp) => {
    console.log("resp",resp);
    resp.send("app is working ..")
});

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})

