const Country = (props) => {
  const { complete = false, name, capital, population, languages, flags } = props;
  console.log(complete)
  if ( complete === true )
    return (
      <div>
        <div>
          <h1>{name.common}</h1>
        </div>
        <div>
          Capital: {capital}<br />
          Population: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </div>
        <div>
          <h2>Languages</h2>
          <ul>
          {
            Object.entries(languages).map(([key, language]) =>
              <li key={key}>{language}</li>
            )
          }
          </ul>
        </div>
        <div>
          <img src={flags.png} alt={name.common} />
        </div>
      </div>
    );

  return (
    <div>
      {name.common}
    </div>
  );
}

export default Country