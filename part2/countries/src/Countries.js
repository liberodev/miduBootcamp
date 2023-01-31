import Country from './Country'

const Countries = ({filter, countries}) => {
  const uniqueCountry = true
  const filteredCountries = countries
    .filter((country) => {
      if (filter === '') return false
      return (country.name.common.toLowerCase()).includes(filter.toLowerCase())
    })

  if ( filteredCountries.length > 10 )
    return <div>Too many matches, specify another filter</div>
  else if ( filteredCountries.length === 1 )
    return (
      <div>
        {filteredCountries
          .map((country) => {
            console.log(country.cca3)
            return <Country key={country.cca3} complete={uniqueCountry} {...country} />
        })}
      </div>
    )

  return (
    <div>
      {filteredCountries
        .map((country) => {
          console.log(country.cca3)
          return <Country key={country.cca3} {...country} />
      })}
    </div>
  )
}

export default Countries