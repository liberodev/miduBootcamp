const Part = (props) => {
  const {part} = props
  const {exercises} = props

  return (
      <p>
        {part} {exercises}
      </p>
  )
}

export default Part