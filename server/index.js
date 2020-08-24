const express = require('express');
const cors = require('cors');
const app  = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        key:"value"
    });
});

app.post('/ser', (req, res) => {
      console.log(req.body);
});

app.listen(5002, () => {
    console.log("listening on 5002");
});


