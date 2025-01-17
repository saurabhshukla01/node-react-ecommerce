const express = require("express");
require('./db/config');
const User = require('./db/User');
const app = express();
const port = 5000;

app.post("/register",(req,resp) => {
    console.log("resp",resp);
    resp.send("api is progress ..")
});

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})