import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        /* const { data } = response */
        setCountries(response.data);
      })
  }, [])

  console.log(countries)

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <Countries filter={filter} countries={countries} />
    </div>
  );
}

export default App;
