## Levantando el archivo docker-compose.yml

1. Descarga e instala Docker Desktop desde el sitio web oficial de Docker.
2. Abre una terminal o PowerShell.
3. Verifica que Docker esté instalado correctamente ejecutando el siguiente comando:
    ```bash
    docker --version
    ```
4. Abre una terminal o PowerShell en la ubicación donde se encuentra el archivo `docker-compose.yml`, en este caso en la carpeta ROOT del proyecto.
5. Ejecuta el siguiente comando para levantar los contenedores de MongoDB y Mongo Express:
    ```bash
    docker compose up -d
    ```
6. Recordar que las credenciales de acceso a Mongo Express y la DB Mongo son las siguientes:
    - **Mongo Express**
        - **Usuario:** root
        - **Contraseña:** root
        - **Puerto:** 8081
    - **MongoDB**
        - **Usuario:** root
        - **Contraseña:** root
        - **Puerto:** 27017