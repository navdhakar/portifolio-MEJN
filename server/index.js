const express = require('express');
const cors = require('cors');
const monk  = require('monk');
const db = monk('localhost/ser');
const datab = db.get('datab');
const app  = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        key:"value"
    });
});

app.get('/ser', (req, res) =>{
    datab.
    find().
    then(datab => {
    res.json(datab);
    });
});
app.post('/ser', (req, res) => {
    const mew = {
        name:req.body.name.toString(),
        value: req.body.value.toString(),
        created: new Date()

    };
      console.log(req.body);
      datab.
      insert(mew).then(createddb =>{
        res.json(createddb);
      });
});

app.listen(5004, () => {
    console.log("listening on 5002");
});


