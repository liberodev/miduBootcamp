const Total = (props) => {
  const {exercises1} = props
  const {exercises2} = props
  const {exercises3} = props

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

export default Total