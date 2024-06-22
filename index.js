
const express = require("express");

const app = express();

app.get('/',function(req,res){
    res.send('Hello World');
});

app.get('/api/agents',function(req,res){
    res.send([
        {div:"gepex",nom:"SEDENO",prenom:"Antonio"},
        {div:"gepex",nom:"BOURICAT",prenom:"Maud"},
        {div:"gepex",nom:"GROS",prenom:"Jean-François"},
        {div:"gepex",nom:"GUIBBERT",prenom:"Romuald"},
        {div:"gepex",nom:"PELLETIER",prenom:"Frédéric"},
        {div:"gepex",nom:"PINAULT",prenom:"Jean-Baptiste"},
        {div:"gepex",nom:"VILAIN",prenom:"Frédéric"},
    ]);
});


async function makeRequest() {
    try {
      const response = await fetch('https://www.insee.fr/fr/accueil');
  
      console.log('response.status: ', response.status); // 👉️ 200
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  
  makeRequest();


app.listen(3000, function(){
    console.log('Server started on port 3000');
});

