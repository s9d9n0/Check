
const express = require("express");

const app = express();

const tableAgents = [
    {div:"gepex",nom:"SEDENO",prenom:"Antonio"},
    {div:"gepex",nom:"BOURICAT",prenom:"Maud"},
    {div:"gepex",nom:"GROS",prenom:"Jean-François"},
    {div:"gepex",nom:"GUIBBERT",prenom:"Romuald"},
    {div:"gepex",nom:"PELLETIER",prenom:"Frédéric"},
    {div:"gepex",nom:"PINAULT",prenom:"Jean-Baptiste"},
    {div:"gepex",nom:"VILAIN",prenom:"Frédéric"},
]

app.get('/',function(req,res){
    res.send('Hello World');
});

// app.get('/api/agents',function(req,res){
//     res.send(tableAgents);
// });

app.get('/api/agents/:prenom',function(req,res){
    console.log(req.params);
    const parsePrenom = req.params.prenom;
    
    const resultPrenom = tableAgents.find((agent) => agent.prenom === parsePrenom);
    if (!resultPrenom) return res.sendStatus(404);
    return res.send(resultPrenom);
});

app.get('/api/agents',function(req,res){
    console.log(req.query);
    const { query: {attr,value},  } = req;
    const valuelow = req.query.value.toLowerCase();
    if (!attr && !value) return res.send(tableAgents);
    if (attr && value) return res.send(
        tableAgents.filter((agent)=>agent[attr].includes(valuelow))
    );
});


// app.get('/checkInsee',async function makeRequest() {
//     try {
//       const response = await fetch('https://www.insee.fr/fr/accueil');
  
//       console.log('response.status: ', response.status); // 👉️ 200
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   });
  



app.listen(3000, function(){
    console.log('Server started on port 3000');
});

