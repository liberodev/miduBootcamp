const Filter = ({filter, setFilter}) => {

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>filter shown with: <input onChange={handleChangeFilter} value={filter} /></div>
  )
}

export default Filter