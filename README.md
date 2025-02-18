<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm install -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.templrate** y renombar a **.env**

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar la aplicacion en dev:

```
npm run start:dev
```

8. Reconstruir nuestra base de datos

```
htpp://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest
