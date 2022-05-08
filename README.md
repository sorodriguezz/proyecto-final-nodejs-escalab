# Proyecto final Escalab NodeJS con Express

Este repositorio contiene el proyecto final del curso de NodeJS. El proyecto esta basado en la versión *4.17.1* de ***Express***.

### Descripción
Proyecto en Nodejs con Express que permite crear artistas, album y canciones. Permite listar, buscar, actualizar y eliminar artistas, albums y canciones. De igual manera cuenta con Autenticación de usuarios con JWT. Al ejecutar la aplicacion crea 3 perfiles de usuario; admin, moderator y user. De igual manera este proyecto esta desplegado en Heroku.

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

### Documentación
POSTMAN: [Postman NodeJS and Express](https://documenter.getpostman.com/view/15642747/UyxdLpeZ)


### EndPoints API

Ruta base DEV: `http://localhost:8002/`
Ruta base Prod: `https://nodejs-escalab.herokuapp.com`

|       Ruta        |      Permiso       |  Tipo  | Método |
|:-----------------:|:------------------:|:------:|:------:|
|     /api/song     |        ALL         |  Song  |  POST  |
|  /api/song/:slug  | MODERATOR OR ADMIN |  Song  | DELETE |
|  /api/song/:slug  |        ALL         |  Song  |  PUT   |
|  /api/song/:slug  |        ALL         |  Song  |  GET   |
|    /api/songs     |        ALL         |  Song  |  GET   |
|    /api/songs     |        ALL         |  Song  |  POST  |
| /api/songs/:count |        ALL         |  Song  |  GET   |
| /api/songs/total  |        ALL         |  Song  |  GET   |
| /api/songs/:slug  |        ALL         |  Song  | PATCH  |
|    /api/users     | MODERATOR OR ADMIN |  User  |  GET   |
|     /api/user     |       ADMIN        |  User  |  POST  |
|     /api/role     |       ADMIN        |  Role  |  POST  |
|    /api/roles     |       ADMIN        |  Role  |  GET   |
|  /api/role/:slug  |       ADMIN        |  Role  |  GET   |
|  /api/role/:slug  |       ADMIN        |  Role  | PATCH  |
|    /api/signin    |        ALL         |  Auth  |  POST  |
|    /api/verify    |        ALL         |  Auth  |  POST  |
|    /api/signup    |        ALL         |  Auth  |  POST  |
|    /api/artist    |        ALL         | Artist |  POST  |
|   /api/artists    |        ALL         | Artist |  POST  |
|    /api/album     |        ALL         | Album  |  POST  |
|    /api/albums    |        ALL         | Album  |  POST  |
|    /api/docs/     |        ALL         |  Doc   |  GET   |
