/* const Mensaje = () => {
  return <h1>Hola Mundo, funciona desde módulo</h1>
} */

/*
Para hacerlo reutilizable desde otros componentes, se le pasan las propiedades como parámetros
y así se podrá reutilizar el componente desde otros, pasándole las propiedades
*/
const Mensaje = (props) => {
  return <h1 style={{ color: props.color }} >{props.message}</h1>
}

export default Mensaje