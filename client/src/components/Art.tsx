import { useState, useEffect } from  'react'

function Art() {
  // TODO asign type interface and check it when fetching
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch('api/art')
      .then(res => {
        if(!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setArtData(data))
      .catch(error => console.error(`Error fetching data: ${error}`))
  }, [])

  return (
    <>
      <div>
        <h2>ArtData</h2>
        <ul>
          {artData.map((art) => (
            <li key={art._id}>
              <h3>{art.title}</h3>
              <p>{art.artist}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Art