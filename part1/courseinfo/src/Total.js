const Total = (props) => {
  const {parts} = props

  return <p><strong>Total of {parts.reduce((sum, actual) => sum + actual.exercises, 0)} exercises</strong></p>
}

export default Total