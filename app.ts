import express from 'express'
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { readFileSync } from 'fs';
import { productRoutes } from './src/routes/products.Routes';
import { warehouseRoutes } from './src/routes/warehouse.Routes';
import morgan from 'morgan';
import { authRouter } from './src/routes/auth.Routes';
import { stockRoutes } from './src/routes/stock.Routes';
const app = express();

const swagg = JSON.parse(readFileSync('./src/utils/swagger.json', 'utf-8'));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagg));
//normal routes
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/product', productRoutes)
app.use('/api/stock', stockRoutes);

//auth
app.use('/api/auth/', authRouter);

app.listen(3000, () => {
  console.log('server corriendo en puerto 3000')
  console.log('http://localhost:3000/api-docs');
});
