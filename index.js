const express = require('express');
const cors = require('cors')
const chef = require("./data/chef.json");
const app = express();
const port = 5000;
app.use(cors())

app.get('/', (req,res) => {
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log("server running", port);
})


app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const data = chef.find(v => v.id == id)
    res.send(data)
})

const latestRecipe = require('./data/latest.json')
app.get("/latest", (req, res) => {
  res.send(latestRecipe);

});