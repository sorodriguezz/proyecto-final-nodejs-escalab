# Proyecto final Escalab NodeJS con Express

Este repositorio contiene el proyecto final del curso de NodeJS. El proyecto esta basado en la versión *4.17.1* de ***Express***.

### Descripción


### Pre-requisitios
* node 16.x
* npm 8.x

### Comandos
* Para ejecutar el proyecto con nodemon usar `npm run dev`
* Para ejecutar con node `npm run start`

### Librerías
* cors: 2.8.5
* dotenv: 8.2.0
* express: 4.17.1
* mongoose: 5.10.2
* slugify: 1.4.5
* bcryptjs: 2.4.3
* express-validator: 6.14.0
* jsonwebtoken: 8.5.1
* swagger-jsdoc: 6.0.2
* swagger-ui-express: 4.1.6


### Librerias de desarrollo:
* nodemon: 2.0.15
* morgan: 1.10.0

### EndPoints API

|                  Ruta                  |      Permiso       |  Tipo  | Método |
|:--------------------------------------:|:------------------:|:------:|:------:|
|     http://localhost:8002/api/song     |        ALL         |  Song  |  POST  |
|  http://localhost:8002/api/song/:slug  | MODERATOR OR ADMIN |  Song  | DELETE |
|  http://localhost:8002/api/song/:slug  |        ALL         |  Song  |  PUT   |
|  http://localhost:8002/api/song/:slug  |        ALL         |  Song  |  GET   |
|    http://localhost:8002/api/songs     |        ALL         |  Song  |  GET   |
|    http://localhost:8002/api/songs     |        ALL         |  Song  |  POST  |
| http://localhost:8002/api/songs/:count |        ALL         |  Song  |  GET   |
| http://localhost:8002/api/songs/total  |        ALL         |  Song  |  GET   |
| http://localhost:8002/api/songs/:slug  |        ALL         |  Song  | PATCH  |
|    http://localhost:8002/api/users     | MODERATOR OR ADMIN |  User  |  GET   |
|     http://localhost:8002/api/user     |       ADMIN        |  User  |  POST  |
|     http://localhost:8002/api/role     |       ADMIN        |  Role  |  POST  |
|    http://localhost:8002/api/roles     |       ADMIN        |  Role  |  GET   |
|  http://localhost:8002/api/role/:slug  |       ADMIN        |  Role  |  GET   |
|  http://localhost:8002/api/role/:slug  |       ADMIN        |  Role  | PATCH  |
|    http://localhost:8002/api/signin    |        ALL         |  Auth  |  POST  |
|    http://localhost:8002/api/verify    |        ALL         |  Auth  |  POST  |
|    http://localhost:8002/api/signup    |        ALL         |  Auth  |  POST  |
|    http://localhost:8002/api/artist    |        ALL         | Artist |  POST  |
|   http://localhost:8002/api/artists    |        ALL         | Artist |  POST  |
|    http://localhost:8002/api/album     |        ALL         | Album  |  POST  |
|    http://localhost:8002/api/albums    |        ALL         | Album  |  POST  |
