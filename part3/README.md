# 💯 Aprendiendo Node.JS y Express para crear una API 📶 - Bootcamp FullStack Gratuito

## Node.js

### Instalación

La descarga, para la instalación, se realiza desde la página de [Node.js][node]. La versión a descargar sería la LTS, que es la versión más estable.

Una vez instalado, desde el terminal, si ponemos el comando 'node' nos abrirá un REPL (Read, Evaluate, Print & Loop) donde podremos escribir código JavaScript.

Además de [Node.js][node], la instalación también comprende 'npm' (node package manager), que es el administrador oficial de instalación de paquetes para [Node.js][node].

Para conocer la versión que tenemos instalada de ambas, bastaría con escribir en el terminal los comandos 'node -v' y 'npm -v', respectivamente. También podríamos instalar una nueva versión de 'npm', la última, con el comando 'npm install -g npm' o, una versión en concreto, con el comando 'npm install -g npm@-versión-'.

### Iniciar proyecto

Para iniciar un proyecto de Node.js, lo podemos hacer bien con 'npm init', que nos irá haciendo preguntas en el proceso de inicio, o bien con 'npm init -y', que lo iniciará tomando como respuesta estandar 'yes'.

### Ejecución proyecto

Una vez iniciado, podemos ejecutar nuestro proyecto con el comando 'node -fichero js-'. Aún así, es más cómodo añadir la ejecución en los "scripts" del proyecto. En el fichero 'package.json' que se genera al iniciar el proyecto, le añadimos el script que queramos ejecutar. En nuestro caso:

`"start": "node index.js"`

Y ahora, desde el terminal, podemos ejecutar el comando 'npm start', para ejecutar dicho script, o bien, si no nos acordamos de los scripts del proyecto, podemos ejecutar 'npm run', que devuelve todos los scripts del proyecto que podemos ejecutar.

### Primer servidor con Node.js


[node]: https://nodejs.org/es/