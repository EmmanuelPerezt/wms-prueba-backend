import express from 'express'
import { Request, Response } from 'express';
import { productRoutes } from './src/routes/productos.Routes';
import { bodegasRoutes } from './src/routes/bodegas.Routes';
const app = express();


//middleware
app.use(express.json());



//routes
app.get('/',(req:Request,res:Response)=>{
    res.send('api corriendo')
})
app.use('/api/bodegas',bodegasRoutes);
app.use('/api/productos',productRoutes)

app.listen(3000, ()=>{
    console.log('server corriendo en puerto 3000')
})