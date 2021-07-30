const express = require ('express'); 
const app = express(); 
const users = require('./users');

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use('', require('./routes'));

const port = 8080;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

