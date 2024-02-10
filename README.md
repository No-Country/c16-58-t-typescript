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
