# Crear una rama en Git, buscar archivos nuevos en la rama principal y hacer push

1. **Crear una nueva rama:**

   ```bash
   git checkout -b nueva-rama
   ```

   Este comando crea una nueva rama llamada `nueva-rama` y automáticamente cambia a ella.

2. **Buscar archivos nuevos en la rama principal (main):**
   Si deseas traer los cambios de la rama principal a tu rama recién creada, necesitas realizar un `git pull` mientras estás en tu nueva rama. Esto actualizará tu rama local con los cambios de la rama principal.

   ```bash
   git pull origin main
   ```

3. **Hacer push a la nueva rama:**
   Una vez que hayas añadido tus cambios y estés listo para subirlos a la nueva rama en el repositorio remoto, utiliza el comando `git push`. Si estás subiendo la rama por primera vez, necesitas usar `-u` para establecer un upstream y vincular tu rama local con la remota.

   ```bash
   git push -u origin nueva-rama
   ```

## Estrategias para evitar conflictos:

1. **Mantén tu rama actualizada:** Realiza `git pull` con frecuencia para traer los últimos cambios de la rama principal a tu rama antes de realizar tus propios cambios. Esto minimiza la posibilidad de conflictos.

2. **Divide tus cambios:** Si estás trabajando en una función compleja, divide tu trabajo en pequeñas tareas que puedas completar y fusionar por separado. Esto reduce la posibilidad de conflictos al cambiar partes diferentes del código.

3. **Comunica tus cambios:** Si trabajas en un equipo, comunica tus cambios a tus compañeros para evitar que múltiples personas modifiquen el mismo archivo simultáneamente. Esto puede reducir la probabilidad de conflictos.

4. **No hagas pull requests directamente en la rama principal (main):** Evita enviar pull requests directamente a la rama principal. En su lugar, crea una rama de características, trabaja en ella y, una vez que estés seguro de que tus cambios no causan problemas, fusiona tu rama de características con la rama principal mediante un pull request.

5. **Utiliza herramientas de gestión de versiones colaborativas:** Herramientas como GitHub, Gitlens ofrecen características para gestionar conflictos automáticamente o de forma guiada, lo que facilita la resolución de conflictos cuando ocurren.

**Nota:** Para obtener sugerencias automáticas de código para mensajes de confirmación en Git, puedes utilizar GitHub Copilot integrado en tu editor de código compatible. Simplemente escribe tu mensaje de confirmación y Copilot te ofrecerá sugerencias contextuales basadas en el contenido de tus cambios y convenciones de mensaje de confirmación comunes.

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

## Archivo ENV (api)

Es necesario añadir las claves ENV en el archivo .env.local, con ubicacion en el root del proyecto

```env
# Configuración del servidor
PORT=3001

NODE_ENV=development
MONGODB_URI=mongodb://localhost:27001/
MONGODB_USERNAME=root
MONGODB_PASSWORD=root

JWT_SECRET=your_secret
JWT_EXPIRATION_TIME=1800

JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
JWT_REFRESH_TOKEN_EXPIRATION_TIME=86400

SECRET_KEY_SESSION=your_secret_key_session
```

## Scripts, explicaciones y comandos útiles

Para ejecutar estos scripts, asegúrate de tener `pnpm` y las dependencias necesarias instaladas en tu sistema. Si `pnpm` no está instalado, puedes instalarlo utilizando `npm install -g pnpm`. Además, asegúrate de tener las dependencias locales instaladas ejecutando `pnpm install` o `pnpm i` en el directorio del proyecto antes de ejecutar los scripts.

---

### Script: `build`

- Descripción: Este script ejecuta la construcción del proyecto utilizando Turbo y formatea el código antes de la compilación.
- Comando: `pnpm run build`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo run build` para compilar el proyecto.

---

### Script: `build:packages`

- Descripción: Este script construye los paquetes del proyecto, excluyendo los directorios de api y client, y formatea el código antes de la compilación.
- Comando: `pnpm run build:packages`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo run build --filter=!./api/** --filter=!./client/**` para compilar los paquetes excluyendo los directorios de api y client.

---

### Script: `build:apps`

- Descripción: Este script construye las aplicaciones del proyecto, excluyendo los paquetes, y formatea el código antes de la compilación.
- Comando: `pnpm run build:apps`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo run build --filter=!./packages/*` para compilar las aplicaciones excluyendo los paquetes.

---

### Script: `start`

- Descripción: Este script inicia el proyecto utilizando Turbo.
- Comando: `turbo start`
- Dependencias: `turbo`

---

### Script: `dev`

- Descripción: Este script inicia el modo de desarrollo del proyecto utilizando Turbo y formatea el código antes de iniciar el servidor.
- Comando: `pnpm run dev`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo dev` para iniciar el modo de desarrollo.

---

### Script: `dev:api`

- Descripción: Este script inicia el modo de desarrollo del proyecto, excluyendo el client, utilizando Turbo y formatea el código antes de iniciar el servidor.
- Comando: `pnpm run dev:api`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo dev --filter=!./client/**` para iniciar el modo de desarrollo excluyendo el client.

---

### Script: `dev:client`

- Descripción: Este script inicia el modo de desarrollo del proyecto, excluyendo el api, utilizando Turbo y formatea el código antes de iniciar el servidor.
- Comando: `pnpm run dev:client`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo dev --filter=!./api/**` para iniciar el modo de desarrollo excluyendo el api.

---

### Script: `lint`

- Descripción: Este script ejecuta el linting del código utilizando Turbo y formatea el código antes de realizar la verificación.
- Comando: `pnpm run lint`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo lint` para realizar el linting del código.

---

### Script: `depcheck`

- Descripción: Este script ejecuta la verificación de dependencias utilizando Turbo y formatea el código antes de realizar la verificación.
- Comando: `pnpm run depcheck`
- Dependencias: `turbo`
- Tareas realizadas:
  1. Ejecuta `pnpm run format:write` para formatear el código.
  2. Ejecuta `turbo run depcheck` para verificar las dependencias del proyecto.

---

### Script: `clean`

- Descripción: Este script limpia el directorio de distribución y otros archivos generados por Turbo, así como los archivos de bloqueo de dependencias.
- Comando: `turbo run clean && rimraf dist .turbo node_modules pnpm-lock.yaml`
- Dependencias: `turbo`, `rimraf`
- Tareas realizadas:
  - Ejecuta `turbo run clean` para limpiar los archivos generados por Turbo.
  - Ejecuta `rimraf dist .turbo node_modules pnpm-lock.yaml` para eliminar el directorio de distribución, los archivos de Turbo, los módulos de Node.js y el archivo de bloqueo de dependencias.

---

### Script: `clean:docs`

- Descripción: Este script limpia la documentación generada por Turbo.
- Comando: `turbo run clean:docs`
- Dependencias: `turbo`
- Tareas realizadas:
  - Ejecuta `turbo run clean:docs` para limpiar la documentación generada por Turbo.

---

### Script: `format:write`

- Descripción: Este script formatea los archivos del proyecto utilizando Prettier y guarda los cambios en los archivos.
- Comando: `prettier --write "**/*.{ts,tsx,md,json, html, css}" --cache`
- Dependencias: `prettier`

---

### Script: `format:check`

- Descripción: Este script verifica el formato de los archivos del proyecto utilizando Prettier sin realizar cambios en los archivos.
- Comando: `prettier --check "**/*.{ts,tsx,md,json, html, css}" --cache`
- Dependencias: `prettier`

---

### Script: `generateDocs`

- Descripción: Este script genera la documentación del proyecto utilizando Turbo.
- Comando: `turbo generateDocs`
- Dependencias: `turbo`

---

## Levantando el archivo docker-compose.yml

1. **Instalación de Docker Desktop:**

   - Descarga e instala Docker Desktop desde el [sitio web oficial de Docker](https://docs.docker.com/desktop/install/). Asegúrate de seguir las instrucciones específicas para tu sistema operativo (Windows, Mac o Linux). Docker Desktop incluye todas las herramientas necesarias para desarrollar y ejecutar aplicaciones Docker en tu máquina local.

2. **Verificación de la instalación de Docker:**

   - Una vez instalado Docker Desktop, abre una terminal o PowerShell y ejecuta el siguiente comando para verificar que Docker esté instalado correctamente y funcionando:
     ```bash
     docker --version
     ```
     Esto debería devolver la versión de Docker que has instalado. Además, puedes ejecutar el comando `docker info` para obtener más detalles sobre tu instalación de Docker, como la versión del servidor, los contenedores en ejecución, la configuración de red, etc.

3. **Inicio del servicio Docker (para Linux):**

   - En sistemas basados en Linux, como Ubuntu, Docker se ejecuta como un servicio. Si no está en ejecución, puedes iniciarlo con el siguiente comando:
     ```bash
     sudo systemctl start docker
     ```
     También puedes habilitar Docker para que se inicie automáticamente en el arranque del sistema con el comando `sudo systemctl enable docker`.

4. **Preparación para levantar los contenedores:**

   - Antes de levantar los contenedores, asegúrate de que el archivo `docker-compose.yml` esté presente en el directorio de trabajo. Este archivo es esencial para definir la configuración de los servicios que se van a levantar, incluyendo la imagen Docker, las variables de entorno y los puertos expuestos. Además, puedes personalizar la configuración según tus necesidades, como cambiar el puerto expuesto para Mongo Express o agregar volúmenes para persistencia de datos.

5. **Levantamiento de los contenedores:**

   - Utiliza el siguiente comando para levantar los contenedores de MongoDB y Mongo Express en segundo plano:
     ```bash
     docker-compose up -d
     ```
     Docker Compose leerá el archivo `docker-compose.yml`, creará y ejecutará los contenedores según la configuración especificada en el archivo. Puedes usar la opción `-d` para ejecutar los contenedores en modo demonio, lo que significa que se ejecutarán en segundo plano y liberarán la terminal para que puedas seguir trabajando.

6. **Verificación de la ejecución de los contenedores:**

   - Para asegurarte de que los contenedores están en ejecución, puedes ejecutar el siguiente comando para listar los contenedores activos:
     ```bash
     docker ps
     ```
     Esto mostrará información sobre todos los contenedores en ejecución, incluyendo los nombres, ID, estado, puertos expuestos, etc. Además, puedes utilizar `docker-compose ps` para ver el estado de los servicios definidos en tu archivo `docker-compose.yml`.

7. **Acceso a Mongo Express:**

   - Una vez que los contenedores estén en funcionamiento, accede a Mongo Express desde tu navegador web en la dirección `http://localhost:8081`. Mongo Express es una interfaz de usuario web para administrar bases de datos MongoDB de forma visual. Puedes realizar operaciones como crear, eliminar y modificar bases de datos y colecciones, así como ejecutar consultas. Además, Mongo Express proporciona información detallada sobre el estado del servidor MongoDB y las estadísticas de rendimiento.

8. **Acceso directo a MongoDB:**
   - Si necesitas interactuar directamente con la base de datos MongoDB, puedes conectarte a ella utilizando una herramienta de línea de comandos como `mongo` o un cliente GUI como Robo 3T. La URL de conexión es `mongodb://localhost:27001`. Utiliza las mismas credenciales de acceso que para Mongo Express (usuario: root, contraseña: root). Esto te permitirá ejecutar consultas, administrar bases de datos y colecciones, y realizar otras operaciones directamente en MongoDB.
