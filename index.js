const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
app.use(cors())

app.get('/', (req,res) => {
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log("server running", port);
})


const chef = require('./data/chef.json');
app.get('/chef', (req, res) => {
    res.send(chef)
})