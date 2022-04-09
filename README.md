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
* morgan: 1.10.0

### Librerias de desarrollo:
* nodemon: 2.0.15

### Enlaces API

| Ruta                                   | Descripción | Método |
|:-------------------------------------- |:-----------:|:------:|
| http://localhost:8002/api/song         |   Create    |  POST  |
| http://localhost:8002/api/song/ride    |   Remove    | DELETE |
| http://localhost:8002/api/song/:slug   |   Update    |  PUT   |
| http://localhost:8002/api/song/:slug   |    Read     |  GET   |
| http://localhost:8002/api/songs        |   ListAll   |  GET   |
| http://localhost:8002/api/songs        |   PerPage   |  POST  |
| http://localhost:8002/api/songs/:count | ListByCount |  GET   |
| http://localhost:8002/api/songs/total  | CountTotal  |  GET   |
