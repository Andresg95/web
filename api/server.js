process.env.PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


app.get('/usuario',(req,res)=>{

    res.json('get Usuario LOCAL!!!');
});

app.post('/usuario', (req, res)=>{
    
    let body= req.body;

    if (body.nombre === undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesario',
        });
    }else{
        res.json({
            persona: body,
        });
    }
});

app.put('/usuario/:id', (req,res)=>{

    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuarios', (req, res)=>{
    res.json('delete Usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});