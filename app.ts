import express from 'express'
import cors from 'cors';
import { Request, Response } from 'express';
import { productRoutes } from './src/routes/productos.Routes';
import { bodegasRoutes } from './src/routes/bodegas.Routes';
import morgan from 'morgan';
const app = express();


//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.get('/',(req:Request,res:Response)=>{
    res.send('api corriendo')
});
app.use('/api/bodegas',bodegasRoutes);
app.use('/api/',productRoutes)

app.listen(3000, ()=>{
    console.log('server corriendo en puerto 3000')
});