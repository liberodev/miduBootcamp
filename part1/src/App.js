import './App.css';
import Mensaje from './Mensaje'

/*
  Cuando se van a crear componentes en el mismo .js para usar dentro de un componente,
  siempre han de crearse separados, no unos componentes dentro de otros.
  Además, para que sean reutilizables para otros componentees, es mejor crearlos en sus propios .js
*/
const Mensaje1 = () => {
  return <h1>Hola Mundo</h1>
}

const Description = () => {
  return <p>Esta es la app del curso FullStack Bootcamp</p>
}

/* function App() {
  return (
    <div className="App">
      <p>Hola Mundo</p>
    </div>
  );
} */
/* También se puede declarar el componente como una function expression */
const App = () => {
  const a = 2
  const b = 4

  // En el return pueden ir variables que puedan renderizar React, que son string y números, por ejemplo. No puede ir directamente un objeto
  return (
    <div className="App">
      <Mensaje1 />
      <Description />
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='blue' message='de React.js' />
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>
      <Mensaje1 />
    </div>
  )
}

export default App;
