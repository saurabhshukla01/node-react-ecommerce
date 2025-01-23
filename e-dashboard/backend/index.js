const express = require("express");
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp) => {
    // resp.send("api is progress ..")
    // resp.send(req.body);

    // how to save user data in user collections
    let user = new User(req.body);
    let result = await user.save();
    resp.send(user);
});

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})