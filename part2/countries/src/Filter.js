const Filter = ({filter, setFilter}) => {

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <label htmlFor='search-country'>Find countries </label>
      <input type='text' id='search-country' onChange={handleChangeFilter} />
    </div>
  )
}

export default Filter