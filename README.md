## Despliegue
El despligue de esta api-rest fue realizado en Amazon Web Services y puedes ser accedido desde
http://3.128.221.178:3000/

## Ejecucion del programa

Para correr el programa puede ejecutar un 
```bash
docker-compose build
```
Posteriormente un 
```bash
docker-compose up -d
```
esto ejecutara todo el entorno necesario para que ejecutar la api (incluida la base de datos)

## Tecnologias usadas

- Express
- Typescript
- Mongodb
- Docker
- Morgan
- Aws