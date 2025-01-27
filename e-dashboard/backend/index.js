const express = require("express");
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
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

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})