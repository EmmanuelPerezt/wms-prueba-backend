import express from 'express'


const app = express();




//middleware
app.use(express.json());


app.listen(3000, ()=>{
    console.log('server corriendo en puerto 3000')
});