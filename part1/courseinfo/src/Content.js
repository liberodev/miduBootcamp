import Part from './Part'

const Content = (props) => {
  const {part1} = props
  const {part2} = props
  const {part3} = props

  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  )
}

export default Content