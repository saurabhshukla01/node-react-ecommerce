const express = require("express");
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// create register api in node Js
app.post("/register", async (req,resp) => {
    // how to save user data in user collections
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
});

// create login api in node Js
app.post("/login", async (req,resp) => {
    console.log(req.body);
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
        }else{
            resp.send({result:"No User Found"});
        }
    }else{
        resp.send({result:"No User Found"});
    }
});

// create Add Product api in node Js
app.post("/add-product" , async (req,resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

// create Get Product api in node Js
app.get("/products" , async (req,resp) => {
    let products = await Product.find();
    if(products.length > 0){
        resp.send(products);
    }else{
        resp.send({result:"No Product Found"});
    }
})

// create Delete Product api in node Js
app.delete("/product/:id" , async (req,resp) => {
    const result = await Product.deleteOne({_id:req.params.id});
    if(result.deletedCount > 0){
        resp.send(result);
    }else{
        resp.send({result:"Somethings went wrong"});
    }
})

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})