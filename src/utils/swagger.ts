import swaggerAutogen from "swagger-autogen";



const doc = {
    info: {
        title: "Wms API",
        description: "Documentación generada automáticamente",
    },
    host: "localhost:3000",
    schemes: ["http"],
};

const outputFile = "./swagger.json";  // Archivo donde se guardará la documentación
const endpointsFiles = ["../../app.ts"]; // Archivo donde están tus rutas

swaggerAutogen(outputFile, endpointsFiles, doc);