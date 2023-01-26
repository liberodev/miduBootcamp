import Part from './Part'

const Content = (props) => {
  const {part1} = props
  const {part2} = props
  const {part3} = props

  const {exercises1} = props
  const {exercises2} = props
  const {exercises3} = props

  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

export default Content