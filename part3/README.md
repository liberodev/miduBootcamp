# 💯 Aprendiendo Node.JS y Express para crear una API 📶 - Bootcamp FullStack Gratuito

## Node.js

### Instalación

La descarga, para la instalación, se realiza desde la página de [Node.js][node]. La versión a descargar sería la LTS, que es la versión más estable.

Una vez instalado, desde el terminal, si ponemos el comando 'node' nos abrirá un REPL (Read, Evaluate, Print & Loop) donde podremos escribir código JavaScript.

Además de [Node.js][node], la instalación también comprende 'npm' (node package manager), que es el administrador oficial de instalación de paquetes para [Node.js][node].

Para conocer la versión que tenemos instalada de ambas, bastaría con escribir en el terminal los comandos 'node -v' y 'npm -v', respectivamente. También podríamos instalar una nueva versión de 'npm', la última, con el comando 'npm install -g npm' o, una versión en concreto, con el comando 'npm install -g npm@-versión-'.

### Iniciar proyecto

Para iniciar un proyecto de Node.js, lo podemos hacer bien con ___npm init___, que nos irá haciendo preguntas en el proceso de inicio, o bien con ___npm init -y___, que lo iniciará tomando como respuesta estandar _yes_.

### Ejecución proyecto

Una vez iniciado, podemos ejecutar nuestro proyecto con el comando ___node -fichero js-___. Aún así, es más cómodo añadir la ejecución en los "scripts" del proyecto. En el fichero _package.json_ que se genera al iniciar el proyecto, le añadimos el script que queramos ejecutar. En nuestro caso:

    "start": "node index.js"

Y ahora, desde el terminal, podemos ejecutar el comando ___npm start___, para ejecutar dicho script, o bien, si no nos acordamos de los scripts del proyecto, podemos ejecutar ___npm run___, que devuelve todos los scripts del proyecto que podemos ejecutar.

### Primer servidor con Node.js

#### EcMAscript module

Los módulos ECMAScript son el formato estándar oficial para empaquetar código JavaScript para su reutilización. Los módulos se definen mediante una variedad de declaraciones de importación (import) y exportación (export).

    import http from 'http'

#### CommonJS

Una serie de pautas para crear un sistema de módulos en el ecosistema Javascript, creados por [Node.js][node]. De esta forma, haciendo un require() podemos importar módulos CommonJS que se exportan con un module.exports desde otros archivos. 

    const http = require('http')

Sin embargo, estos require() son creados por NodeJS y no son compatibles directamente en navegadores, salvo que se preprocese o transpile antes con alguna herramienta como podría ser un empaquetador o automatizador del estilo de Webpack, Parcel, Rollup, Babel o similar. Estas herramientas buscan los require() y los sustituyen por el código del fichero correspondiente, uniendo y empatando todos los archivos Javascript necesarios de nuestra aplicación web en un sólo archivo Javascript llamado bundle.

#### Ejemplo

    const http = require('http')
    
    const app = http.createServer((request, response) => {
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Hello World')
    })
    
    const PORT = 4001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)

Mediante el módulo http creamos un servidor que lo guardamos en la variable _app_. Al createServer, se le pasa, como parámetro, un callback, que no deja de ser una función que se ejecuta cada vez que llegue una petición al servidor. El primer parámetro del callback es la petición (request) y la segunda es la respuesta (response).

El servidor tiene que escuchar en algún puerto, siendo por defecto el 80 para http y el 443 para https. Nosotros, en nuestra proyecto le indicamos que es el puerto 4001, que debería de ser un puerto que esté libre para que no de error.

Ahora cambiemos el `'Hello World'` por las notas que hemos estado haciendo en ejercicios anteriores.

    let notes = [
      {
        "id": 1,
        "content": "Me tengo que suscribir a @midudev en YouTube",
        "date": "2019-05-30T17:30:31.098Z",
        "important": true
      },
      {
        "id": 1,
        "content": "Tengo que estudiar las clases del FullStack Bootcamp",
        "date": "2019-05-30T18:39:34.091Z",
        "important": false
      },
      {
        "id": 1,
        "content": "Repasar los retos de JavaScript de midudev",
        "date": "2019-05-30T19:20:14.298Z",
        "important": true
      }
    ]

Una vez hecho esto, cambiamos el dato a devolver en `response.end()`. Pasando de devolver el texto:

    response.end('Hello World')

A devolver el array de notas.

    response.end(JSON.stringify(notes))

Además, como la respuesta ya no es un texto plano sino que es un JSON, debemos de cambiar el Content-type e indicar que es 'application/json'

    response.writeHead(200, { 'Content-Type': 'application/json' })

### Instalando nodemon

Para no estar todo el rato levantando el servidor, para que la aplicación coja los cambios, podemos instalar [nodemon][nodemon]. Aunque en la documentación oficial y en git ponga que se realice la instalación a nivel global, _npm install -g nodemon_, es recomendable hacerlo a nivel local de proyecto, pues todo lo que tenga que ver con dependencias del proyecto es mejor tenerlo en el proyecto.

En nuestro caso, lo instalaremos con ___npm install nodemon -D___, indicando que es una dependencia de desarrollo con el -D.

Para ejecutar [nodemon][nodemon] valdrá con ejecutar el comando:

    ./node_modules/.bin/nodemon index.js

Al ejecutar, nos indicará que está observando ciertos ficheros para reiniciar en caso de modificación.

    index.js
    [nodemon] 2.0.20
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    Server running on port 4001

Pero como hemos dicho, es mejor siempre incluir los scripts en el _package.json_ y, ahora, no será menos; por lo que añadiremos:

    "dev": "nodemon index.js",

### Instalando Express

[Express][express] nos permite crear facilmente diferentes rutas para nuestra aplicación al instalarlo en el proyecto. A diferencia de nodemon, como Express si es un paquete que deba de estar en el proyecto en producción, se instala en el proyecto.

    npm install express

Como podemos ver, se diferencian en el _package.json_ las dependencias de desarrollo, de las que no lo son:

    "devDependencies": {
        "nodemon": "^2.0.20"
    },
    "dependencies": {
        "express": "^4.18.2"
    }

> Las versiones que se utilizan en [Node.js][node] se conoce como 'Semantic Versioning', que significa que cada número tiene un significado. Por ejemplo, siguiendo la numeración de la versión de nodemon: el 20 sería el ___parch___ (o hotfix), que indica que se ha hecho una corrección dentro de la versión actual, sin modificar su funcionamiento. Si se le añade alguna _feature_, por ejemplo que además de observar los ficheros js y reiniciar el servidor, actualice la página; se incrementaría el valor del 0, que es lo que se denomina como ___minor___. El número de la ___major___, que hace referencia a cuando si se cambian cosas que modifican el contrato del paquete.
> 
> El símbolo ___caret___ hace referencia a que, si sacan una versión superior se irá actualizando, dentro de lo posible. Hay que tener cuidado con esto, ya que puede ser que al actualizarlo no seamos conscientes y estemos trabajando sobre una versión que no controlamos. La actualización será como máximo la _minor_. Para evitar esto o bien eliminamos el caret o bien instalamos con el comando 'npm install Express -E', para que instale con la versión exacta.

### Creando un servidor con Express

La manera de crear el servidor con [Express][express] es algo más sencilla que con _http_, siendo de la siguiente manera:

    const express = require('express')
    const app = express()
    
    app.get('/', (req, res) => {
      res.send('<h1>Hello World</h1>')
    })
    
    app.get('/api/notes', (req, res) => {
      res.json(notes)
    })
    
    const PORT = 4001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

De esta forma, tendríamos ya dos _get_ disponibles para la aplicación que hemos creado, dándole a cada una una ruta distinta para su ejecución.

A diferencia que con el módulo _http_, la ___manera que tiene de levantarse de la aplicación con express es asíncrona___, por lo que al llamar al método _listen_ habría que pasar un callback a ejecutar una vez haya terminado de levantarse. Por lo que, en nuestro caso, el console.log(`Server running on port ${PORT})`) debería de ejecutarse dentro del callback de _listen_

Para hacer una consulta a nuestra API introduciendo un valor, habrá que hacerlo de forma dinámica. En nuestro caso haremos una consulta por id, de la siguiente manera:

    app.get('/api/notes/:id', (req, res) => {
      const id = Number(req.params.id)
      const note = notes.find(note => note.id === id)
    
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })

Podemos controlar, de manera que el usuario reciba un feedback correcto, que la consulta no tiene datos a devolver indicándole el _status_ 404.

### Añadiendo un DELETE a nuestra API

Para realizar un DELETE sobre nuestra API, podríamos utilizar el mismo _get_ que en la consulta que hemos realizado, pero cambiándolo por un _delete_.

    app.delete('/api/notes/:id', (req, res) => {
      const id = Number(req.params.id)
      const note = notes.find(note => note.id === id)
    
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })

Ahora nos enfrentamos a la tesitura de que tanto el get como el delete tienen la misma URL para ejecutarse, por lo que ¿cómo hacemos para diferenciarlo en su ejecución? Es por esto que las peticiones a las APIs no se suelen ejecutar desde un navegador y si desde servicios como Postman e Insomnia, que son los que vamos a utilizar nosotros.

[node]: https://nodejs.org/es/
[nodemon]: https://github.com/remy/nodemon
[express]: https://github.com/expressjs/express