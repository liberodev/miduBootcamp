# Apuntes '💯 Aprendiendo Node.JS y Express para crear una API 📶 - Bootcamp FullStack Gratuito'

## Node.js

### Instalación

La descarga se realiza desde la página de [Node.js][node]. La versión a descargar sería la LTS, que es la versión más estable.

Una vez instalado, desde el terminal, si nponemos el comando 'node', nos abrirá un REPL (Read, Evaluate, Print & Loop) donde podremos escribir código JavaScript.

Además de [Node.js][node], la instalación también comprende 'npm' (node package manager), que es el administrador oficial de instalación de paquetes.

Para conocer la versión de la que disponemos de ambos, bastaría con escribir en el terminal los comandos 'node -v' y 'nmp -v', respectivamente. También podríamos instalar una nueva versión de 'npm', la última, con el comando 'npm install -g npm', o, una versión en concreto, con el comando 'npm install -g npm@-version-'.

### Iniciar proyecto

Para iniciar un proyecto de Node.js lo podemos hacer bien con 'npm init', que nos irá haciendo preguntas para la creación del proyecto, o bien con el comando 'npm init -y', que lo iniciará tomando como respuesta estandar 'yes'.

### Ejecución proyecto

Una vez iniciado el proyecto, podemos ejecutarlo con el comando 'node -fichero js-'. Aún así, lo más cómodo es añadir la ejecución del proyecto en el fichero package.json, generado al iniciar el proyecto. En nuestro caso, deberíamos de añadir a la sección de "scripts" el nuestro:

`"start": "node index.js"`

Y ahora, desde terminal podemos ejecutar bien 'npm run', para conocer todos los scripts del proyecto, o bien 'npm start', si quisiéramos ejecutar el script "start".

### Primer servidor con Node.js

<code>const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain'})
  response.end('Hello World')
})

const PORT = 4000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)</code>

[node]:(https://nodejs.org/es/)