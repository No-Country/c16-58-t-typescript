## Archivo ENV (api)

Es necesario añadir las claves ENV en el archivo .env.local, con ubicacion en el root del proyecto

```env
# Configuración del servidor
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/testing
SECRET_KEY_SESSION=secret
JWT_SECRET=secret
JWT_EXPIRATION_TIME=1h
JWT_REFRESH_TOKEN_SECRET=secret
JWT_REFRESH_TOKEN_EXPIRATION_TIME=1d
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
   - Si necesitas interactuar directamente con la base de datos MongoDB, puedes conectarte a ella utilizando una herramienta de línea de comandos como `mongo` o un cliente GUI como Robo 3T. La URL de conexión es `mongodb://localhost:27017`. Utiliza las mismas credenciales de acceso que para Mongo Express (usuario: root, contraseña: root). Esto te permitirá ejecutar consultas, administrar bases de datos y colecciones, y realizar otras operaciones directamente en MongoDB.
