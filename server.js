const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 9088;

app.use(cors());

let tvShows = {
    "sopranos":{
        "seasons":6,
        "episodes":86,
        "creator":"David Chase",
        "theme song":"Woke up This Morning"
    },
    "mash":{
        "seasons":11,
        "episodes":256,
        "creator":"Larry Gelbart",
        "theme song":"Suicide is Painless"
    },
    "the wire":{
        "seasons":5,
        "episodes":60,
        "creator":"David Simon",
        "theme song":"Way Down in the Hole"
    },
    "breaking bad":{
        "seasons":5,
        "episodes":62,
        "creator":"Vince Gilligan",
        "theme song":"The Ballad of Heisenberg"
    },
    "default":{
        "seasons":0,
        "episodes":0,
        "creator":"n/a",
        "theme song":"n/a"        
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request,response)=>{
    const showName = request.params.name.toLowerCase();
    console.log(showName);
    if(showName in tvShows)
        response.json(tvShows[showName]);
    else
        response.json(tvShows['default']);
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}.`);
});