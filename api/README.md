# Documentación del Endpoint /api/auth/register

Este endpoint se utiliza para registrar nuevos usuarios en el sistema. Los datos necesarios para el registro deben ser enviados en el cuerpo de la solicitud utilizando el método POST.

## URL

```
/api/auth/register
```

## Método

```
POST
```

## Parámetros del Cuerpo (Body)

- `username` (String): Nombre de usuario único para el nuevo usuario.
- `password` (String): Contraseña para la cuenta del nuevo usuario.
- `confirmPassword` (String): Confirmación de la contraseña ingresada.
- `email` (String): Dirección de correo electrónico única asociada con la cuenta del nuevo usuario.

## Respuestas

### Respuesta Exitosa

- **Código de Estado:** 200 OK
- **Tipo de Contenido:** application/json
- **Cuerpo de la Respuesta:**
  ```json
  {
    "data": "¡Usuario registrado exitosamente!",
    "isArray": false,
    "path": "/api/auth/register",
    "duration": "145ms",
    "method": "POST"
  }
  ```
  - `data` (String): Mensaje indicando que el usuario ha sido registrado exitosamente.
  - `isArray` (Boolean): Indica si el objeto devuelto es un array (en este caso, es `false`).
  - `path` (String): Ruta del endpoint.
  - `duration` (String): Tiempo de duración de la solicitud.
  - `method` (String): Método HTTP utilizado.

### Respuesta de Conflicto (Usuario ya Existe)

- **Código de Estado:** 409 Conflict
- **Tipo de Contenido:** application/json
- **Cuerpo de la Respuesta:**
  ```json
  {
    "statusCode": 409,
    "message": "El nombre de usuario o correo electrónico ya existe en el sistema."
  }
  ```
  - `statusCode` (Number): Código de estado de la respuesta.
  - `message` (String): Mensaje de error indicando que el nombre de usuario o correo electrónico ya está registrado en el sistema.

### Respuesta de Error del Servidor

- **Código de Estado:** 500 Internal Server Error
- **Tipo de Contenido:** application/json
- **Cuerpo de la Respuesta:**
  ```json
  {
    "statusCode": 500,
    "message": "Error interno del servidor."
  }
  ```
  - `statusCode` (Number): Código de estado de la respuesta.
  - `message` (String): Mensaje de error indicando que ha ocurrido un error interno en el servidor durante el procesamiento de la solicitud.
