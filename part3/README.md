# 馃挴 Aprendiendo Node.JS y Express para crear una API 馃摱 - Bootcamp FullStack Gratuito

## Node.js

### Instalaci贸n

La descarga, para la instalaci贸n, se realiza desde la p谩gina de [Node.js][node]. La versi贸n a descargar ser铆a la LTS, que es la versi贸n m谩s estable.

Una vez instalado, desde el terminal, si ponemos el comando 'node' nos abrir谩 un REPL (Read, Evaluate, Print & Loop) donde podremos escribir c贸digo JavaScript.

Adem谩s de [Node.js][node], la instalaci贸n tambi茅n comprende 'npm' (node package manager), que es el administrador oficial de instalaci贸n de paquetes para [Node.js][node].

Para conocer la versi贸n que tenemos instalada de ambas, bastar铆a con escribir en el terminal los comandos 'node -v' y 'npm -v', respectivamente. Tambi茅n podr铆amos instalar una nueva versi贸n de 'npm', la 煤ltima, con el comando 'npm install -g npm' o, una versi贸n en concreto, con el comando 'npm install -g npm@-versi贸n-'.

### Iniciar proyecto

Para iniciar un proyecto de Node.js, lo podemos hacer bien con ___npm init___, que nos ir谩 haciendo preguntas en el proceso de inicio, o bien con ___npm init -y___, que lo iniciar谩 tomando como respuesta estandar _yes_.

### Ejecuci贸n proyecto

Una vez iniciado, podemos ejecutar nuestro proyecto con el comando ___node -fichero js-___. A煤n as铆, es m谩s c贸modo a帽adir la ejecuci贸n en los "scripts" del proyecto. En el fichero _package.json_ que se genera al iniciar el proyecto, le a帽adimos el script que queramos ejecutar. En nuestro caso:

    "start": "node index.js"

Y ahora, desde el terminal, podemos ejecutar el comando ___npm start___, para ejecutar dicho script, o bien, si no nos acordamos de los scripts del proyecto, podemos ejecutar ___npm run___, que devuelve todos los scripts del proyecto que podemos ejecutar.

### Primer servidor con Node.js

#### EcMAscript module

Los m贸dulos ECMAScript son el formato est谩ndar oficial para empaquetar c贸digo JavaScript para su reutilizaci贸n. Los m贸dulos se definen mediante una variedad de declaraciones de importaci贸n (import) y exportaci贸n (export).

    import http from 'http'

#### CommonJS

Una serie de pautas para crear un sistema de m贸dulos en el ecosistema Javascript, creados por [Node.js][node]. De esta forma, haciendo un require() podemos importar m贸dulos CommonJS que se exportan con un module.exports desde otros archivos. 

    const http = require('http')

Sin embargo, estos require() son creados por NodeJS y no son compatibles directamente en navegadores, salvo que se preprocese o transpile antes con alguna herramienta como podr铆a ser un empaquetador o automatizador del estilo de Webpack, Parcel, Rollup, Babel o similar. Estas herramientas buscan los require() y los sustituyen por el c贸digo del fichero correspondiente, uniendo y empatando todos los archivos Javascript necesarios de nuestra aplicaci贸n web en un s贸lo archivo Javascript llamado bundle.

#### Ejemplo

    const http = require('http')
    
    const app = http.createServer((request, response) => {
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Hello World')
    })
    
    const PORT = 4001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)

Mediante el m贸dulo http creamos un servidor que lo guardamos en la variable _app_. Al createServer, se le pasa, como par谩metro, un callback, que no deja de ser una funci贸n que se ejecuta cada vez que llegue una petici贸n al servidor. El primer par谩metro del callback es la petici贸n (request) y la segunda es la respuesta (response).

El servidor tiene que escuchar en alg煤n puerto, siendo por defecto el 80 para http y el 443 para https. Nosotros, en nuestra proyecto le indicamos que es el puerto 4001, que deber铆a de ser un puerto que est茅 libre para que no de error.

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

Adem谩s, como la respuesta ya no es un texto plano sino que es un JSON, debemos de cambiar el Content-type e indicar que es 'application/json'

    response.writeHead(200, { 'Content-Type': 'application/json' })

### Instalando nodemon

Para no estar todo el rato levantando el servidor, para que la aplicaci贸n coja los cambios, podemos instalar [nodemon][nodemon]. Aunque en la documentaci贸n oficial y en git ponga que se realice la instalaci贸n a nivel global, _npm install -g nodemon_, es recomendable hacerlo a nivel local de proyecto, pues todo lo que tenga que ver con dependencias del proyecto es mejor tenerlo en el proyecto.

En nuestro caso, lo instalaremos con ___npm install nodemon -D___, indicando que es una dependencia de desarrollo con el -D.

Para ejecutar [nodemon][nodemon] valdr谩 con ejecutar el comando:

    ./node_modules/.bin/nodemon index.js

Al ejecutar, nos indicar谩 que est谩 observando ciertos ficheros para reiniciar en caso de modificaci贸n.

    index.js
    [nodemon] 2.0.20
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    Server running on port 4001

Pero como hemos dicho, es mejor siempre incluir los scripts en el _package.json_ y, ahora, no ser谩 menos; por lo que a帽adiremos:

    "dev": "nodemon index.js",

### Instalando Express

[Express][express] nos permite crear facilmente diferentes rutas para nuestra aplicaci贸n al instalarlo en el proyecto. A diferencia de nodemon, como Express si es un paquete que deba de estar en el proyecto en producci贸n, se instala en el proyecto.

    npm install express

Como podemos ver, se diferencian en el _package.json_ las dependencias de desarrollo, de las que no lo son:

    "devDependencies": {
        "nodemon": "^2.0.20"
    },
    "dependencies": {
        "express": "^4.18.2"
    }

> Las versiones que se utilizan en [Node.js][node] se conoce como 'Semantic Versioning', que significa que cada n煤mero tiene un significado. Por ejemplo, siguiendo la numeraci贸n de la versi贸n de nodemon: el 20 ser铆a el ___parch___ (o hotfix), que indica que se ha hecho una correcci贸n dentro de la versi贸n actual, sin modificar su funcionamiento. Si se le a帽ade alguna _feature_, por ejemplo que adem谩s de observar los ficheros js y reiniciar el servidor, actualice la p谩gina; se incrementar铆a el valor del 0, que es lo que se denomina como ___minor___. El n煤mero de la ___major___, que hace referencia a cuando si se cambian cosas que modifican el contrato del paquete.
> 
> El s铆mbolo ___caret___ hace referencia a que, si sacan una versi贸n superior se ir谩 actualizando, dentro de lo posible. Hay que tener cuidado con esto, ya que puede ser que al actualizarlo no seamos conscientes y estemos trabajando sobre una versi贸n que no controlamos. La actualizaci贸n ser谩 como m谩ximo la _minor_. Para evitar esto o bien eliminamos el caret o bien instalamos con el comando 'npm install Express -E', para que instale con la versi贸n exacta.

### Creando un servidor con Express

La manera de crear el servidor con [Express][express] es algo m谩s sencilla que con _http_, siendo de la siguiente manera:

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

De esta forma, tendr铆amos ya dos _get_ disponibles para la aplicaci贸n que hemos creado, d谩ndole a cada una una ruta distinta para su ejecuci贸n.

A diferencia que con el m贸dulo _http_, la ___manera que tiene de levantarse de la aplicaci贸n con express es as铆ncrona___, por lo que al llamar al m茅todo _listen_ habr铆a que pasar un callback a ejecutar una vez haya terminado de levantarse. Por lo que, en nuestro caso, el console.log(`Server running on port ${PORT})`) deber铆a de ejecutarse dentro del callback de _listen_

Para hacer una consulta a nuestra API introduciendo un valor, habr谩 que hacerlo de forma din谩mica. En nuestro caso haremos una consulta por id, de la siguiente manera:

    app.get('/api/notes/:id', (req, res) => {
      const id = Number(req.params.id)
      const note = notes.find(note => note.id === id)
    
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })

Podemos controlar, de manera que el usuario reciba un feedback correcto, que la consulta no tiene datos a devolver indic谩ndole el _status_ 404.

### A帽adiendo un DELETE a nuestra API

Para realizar un DELETE sobre nuestra API, podr铆amos utilizar el mismo _get_ que en la consulta que hemos realizado, pero cambi谩ndolo por un _delete_.

    app.delete('/api/notes/:id', (req, res) => {
      const id = Number(req.params.id)
      const note = notes.find(note => note.id === id)
    
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })

Ahora nos enfrentamos a la tesitura de que tanto el get como el delete tienen la misma URL para ejecutarse, por lo que 驴c贸mo hacemos para diferenciarlo en su ejecuci贸n? Es por esto que las peticiones a las APIs no se suelen ejecutar desde un navegador y si desde servicios como Postman e Insomnia, que son los que vamos a utilizar nosotros.

[node]: https://nodejs.org/es/
[nodemon]: https://github.com/remy/nodemon
[express]: https://github.com/expressjs/express