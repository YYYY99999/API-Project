const express = require ('express');
const app = express();

app.get('/', (req,res)=>{
res.send('Hellloo0000');

});
app.get('/api/resizeImage',(req,res)=>{
    res.send([1,2,3]);
});

const port = process.env.Port || 8000;
app.listen(port,()=> console.log(`Listening on port ${port}`));