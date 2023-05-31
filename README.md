# Tech-Task-SoftwareDeveloper



# README - Tech-Task-SoftwareDeveloper

Este es el README para el proyecto Tech-Task-SoftwareDeveloper

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (^16.x)
- Angular CLI (^15.x)

## Configuración

1. Clona este repositorio desde GitHub:
    https://github.com/ManuelMenaM/Tech-Task-SoftwareDeveloper.git
    
2. Instala las dependencias del proyecto abriendo una terminal y escribiendo:

   ```shell
   cd frontend/
   npm install
   ```
   y
   
   ```shell
   cd backend/
   npm install
   ```

## Configuración de la base de datos

1. Crea una cuenta en MongoDB Atlas (https://www.mongodb.com/cloud/atlas) si aún no tienes una.
2. Crea un clúster gratuito en MongoDB Atlas.
3. Copia la cadena de conexión de tu clúster.

## Configuración del servidor

1. Navega al directorio del backend y crea un archivo `.env` en el directrio, a continuación, establece las siguientes variables de entorno:

   ```dotenv
   MONGO_URI=<CADENA_DE_CONEXION_MONGODB_ATLAS>
   ```

   Asegúrate de reemplazar `<CADENA_DE_CONEXION_MONGODB_ATLAS>` con la cadena de conexión de tu clúster MongoDB Atlas.
   
2. Navega al directorio de la aplicación Angular:

    ```shell
    cd backend/
    ```

3. Inicia el servidor:

   ```shell
   npm start
   ```

## Configuración de la aplicación

1. Navega al directorio de la aplicación Angular:

   ```shell
   cd frontend/
   ```

2. Inicia la aplicación:

   ```shell
   ng serve
   ```

   La aplicación Angular se ejecutará en `http://localhost:4200` por defecto.

## Uso

- Accede a la aplicación desde tu navegador web en `http://localhost:4200`.
- Inicia sesión utilizando tu cuenta o crea una nueva cuenta.
- Explora las diferentes vistas para administrar los vehículos y ver los datos correspondientes.




