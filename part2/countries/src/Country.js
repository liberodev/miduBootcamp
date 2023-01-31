import { useState } from 'react'

const Country = (props) => {
  const [showAll, setShowAll] = useState(false);
  const { complete = false, name, capital, population, languages, flags } = props;
  
  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

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
    )

  if (showAll === true)
    return (
      <div>
        <div>
          <h1>{name.common} <button onClick={handleShowAll}>hide</button></h1>
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
    )

  
  return (
    <div>
      {name.common} <button onClick={handleShowAll}>show</button>
    </div>
  );
    
}

export default Country