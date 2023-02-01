import Country from './Country'

const Countries = ({filter, countries}) => {
  const uniqueCountry = true
  const filteredCountries = countries
    .filter((country) => {
      if (filter === '') return false
      return (country.name.common.toLowerCase()).includes(filter.toLowerCase())
    })
  
  console.log(filteredCountries)
  if ( filteredCountries.length > 10 )
    return <div>Too many matches, specify another filter</div>
  else if ( filteredCountries.length === 1 )
    return (
      <div>
        {filteredCountries
          .map((country) => {
            return <Country key={country.name.common} complete={uniqueCountry} {...country} />
        })}
      </div>
    )

  return (
    <div>
      {filteredCountries
        .map((country) => {
          return (
            <div>
              <Country key={country.name.common} {...country} />
            </div>
          )
      })}
    </div>
  )
}

export default Countries