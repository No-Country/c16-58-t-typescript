api / [Exports](modules.md)

# API Endpoints

# Ruta: `/api/auth/register`

#### Descripción:

Este endpoint se utiliza para registrar un nuevo usuario.

#### Método: `POST`

#### Información necesaria en el cuerpo (Body):

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

#### Respuesta positiva:

- Código: `201`
- Tipo de respuesta: JSON

```json
{
  "data": "User with email 'email' and username 'username' has been registered",
  "isArray": false,
  "path": "/api/auth/register",
  "duration": "101ms",
  "method": "POST"
}
```

#### Respuestas negativas:

1. Código: `409`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 409,
     "timestamp": "2024-02-14T01:00:10.052Z",
     "path": "/api/auth/register",
     "message": "User with email 'testing98@testing.com' and username 'testing98' already exists"
   }
   ```

2. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:22.222Z",
     "path": "/api/auth/register",
     "message": [
       "email must be an email",
       "email must be a string",
       "email should not be empty"
     ],
     "error": "Bad Request"
   }
   ```

3. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:37.218Z",
     "path": "/api/auth/register",
     "message": ["username must be a string", "username should not be empty"],
     "error": "Bad Request"
   }
   ```

4. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:00:49.322Z",
     "path": "/api/auth/register",
     "message": [
       "password must be a string",
       "password should not be empty",
       "password is not strong enough"
     ],
     "error": "Bad Request"
   }
   ```

5. Código: `400`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 400,
     "timestamp": "2024-02-14T01:01:52.487Z",
     "path": "/api/auth/register",
     "message": [
       "confirmPassword must be a string",
       "confirmPassword should not be empty",
       "confirmPassword is not strong enough"
     ],
     "error": "Bad Request"
   }
   ```

6. Código: `409`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 409,
     "timestamp": "2024-02-14T01:06:15.629Z",
     "path": "/api/auth/register",
     "message": "Passwords do not match"
   }
   ```

7. Código: `500`
   - Tipo de respuesta: JSON
   ```json
   {
     "statusCode": 500,
     "timestamp": "2024-02-14T01:03:02.837Z",
     "path": "/api/auth/register",
     "message": "connect ECONNREFUSED ::1:27001, connect ECONNREFUSED 127.0.0.1:27001",
     "code_error": null
   }
   ```

# Ruta: `/api/auth/login`

#### Descripción:

Este endpoint se utiliza para que un usuario inicie sesión en el sistema.

#### Método: `POST`

#### Información necesaria en el cuerpo (Body):

```json
{
  "username": "string",
  "password": "string"
}
```

#### Respuesta positiva:

- Código: `201`
- Tipo de respuesta: JSON

```json
{
  "data": "Login successful",
  "isArray": false,
  "path": "/api/auth/login",
  "duration": "89ms",
  "method": "POST"
}
```

#### Respuestas negativas:

1. Código: `401`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 401,
     "timestamp": "2024-02-14T01:08:55.447Z",
     "path": "/api/auth/login",
     "message": "Invalid username or password."
   }
   ```

2. Código: `401`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 401,
     "timestamp": "2024-02-14T01:09:14.874Z",
     "path": "/api/auth/login",
     "message": "Unauthorized"
   }
   ```

3. Código: `500`

   - Tipo de respuesta: JSON

   ```json
   {
     "statusCode": 500,
     "timestamp": "2024-02-14T01:03:02.837Z",
     "path": "/api/auth/register",
     "message": "connect ECONNREFUSED ::1:27001, connect ECONNREFUSED 127.0.0.1:27001",
     "code_error": null
   }
   ```

# Ruta: `/api/auth/is_authenticated`

#### Descripción:

Este endpoint se utiliza para verificar si el usuario actual está autenticado.

#### Método: `GET`

#### Información necesaria:

No hay información requerida en el cuerpo de la solicitud. La autenticación se verifica a través de cookies.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": {
    "username": "testingd98"
  },
  "isArray": false,
  "path": "/api/auth/is_authenticated",
  "duration": "6ms",
  "method": "GET"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:11:54.520Z",
  "path": "/api/auth/is_authenticated",
  "message": "Unauthorized"
}
```

# Ruta: `/api/auth/refresh`

#### Descripción:

Este endpoint se utiliza para solicitar una actualización de la sesión de autenticación.

#### Método: `GET`

#### Información necesaria:

No se requiere información en el cuerpo de la solicitud.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": "Refresh successful",
  "isArray": false,
  "path": "/api/auth/refresh",
  "duration": "1ms",
  "method": "GET"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:14:36.073Z",
  "path": "/api/auth/refresh",
  "message": "Unauthorized"
}
```

# Ruta: `/api/auth/logout`

#### Descripción:

Este endpoint se utiliza para cerrar la sesión del usuario y realizar el logout.

#### Método: `POST`

#### Información necesaria:

No se requiere información en el cuerpo de la solicitud.

#### Respuesta positiva:

- Código: `200`
- Tipo de respuesta: JSON

```json
{
  "data": "Logout successful",
  "isArray": false,
  "path": "/api/auth/logout",
  "duration": "1ms",
  "method": "POST"
}
```

#### Respuesta negativa:

- Código: `401`
- Tipo de respuesta: JSON

```json
{
  "statusCode": 401,
  "timestamp": "2024-02-14T01:14:36.073Z",
  "path": "/api/auth/logout",
  "message": "Unauthorized"
}
```
