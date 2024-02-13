# Endpoint de Registro de Usuario

Este endpoint permite registrar nuevos usuarios en la aplicación. Los usuarios pueden registrarse proporcionando su dirección de correo electrónico, nombre de usuario, contraseña y confirmación de contraseña.

## Ruta

```
POST /api/auth/register
```

## Body Requerido

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

- `email`: La dirección de correo electrónico del usuario.
- `username`: El nombre de usuario deseado para el usuario.
- `password`: La contraseña del usuario.
- `confirmPassword`: Confirmación de la contraseña ingresada por el usuario.

## Respuesta Exitosa

En caso de un registro exitoso, el servidor responderá con un mensaje de confirmación junto con algunos metadatos:

```json
{
  "data": "User with email 'string' and username 'string' has been registered",
  "isArray": false,
  "path": "/api/auth/register",
  "duration": "string",
  "method": "POST"
}
```

- `data`: Un mensaje que confirma el registro exitoso del usuario, incluyendo el email y el nombre de usuario registrados.
- `isArray`: Indica si la respuesta contiene un array de datos (en este caso, es `false`).
- `path`: La ruta del endpoint utilizado para el registro.
- `duration`: La duración de la solicitud.
- `method`: El método HTTP utilizado (en este caso, `POST`).

## Errores Posibles

En caso de que ocurra algún error durante el registro, el servidor devolverá un mensaje de error junto con el código de estado correspondiente. Los errores posibles incluyen:

- `409 Conflict`: Indica que ya existe un usuario con el mismo email y/o nombre de usuario.
- `500 Internal Server Error`: Indica un problema interno en el servidor, como una conexión fallida con la base de datos.

A continuación se muestran ejemplos de mensajes de error:

1. Error porque tanto el username como el email están en uso:

```json
{
  "statusCode": 409,
  "message": "User with email 'string' and username 'string' already exists"
}
```

2. Error por el username ya registrado:

```json
{
  "statusCode": 409,
  "message": "User with username 'string' already exists"
}
```

3. Error por el email en uso:

```json
{
  "statusCode": 409,
  "message": "User with email 'string' already exists"
}
```

4. Error de conexión con la base de datos:

```json
{
  "statusCode": 500,
  "message": "connect ECONNREFUSED ::1:27001, connect ECONNREFUSED 127.0.0.1:27001",
  "code_error": null
}
```

## Ejemplo de Uso

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"example@example.com","username":"example_user","password":"Password123","confirmPassword":"Password123"}' \
  http://example.com/api/auth/register
```
