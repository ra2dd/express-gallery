import { useState, useEffect } from  'react'
import './Art.css'

interface ArtPiece {
  _id: string,
  title: string,
  artist: string,
  image: string,
}

function Art() {
  const [artData, setArtData] = useState<ArtPiece[]>([]);

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
      <div className='main-ctn'>
        <ul className='art-ctn'>
          {artData.map((art) => (
            <li key={art._id}>
              <img src={art.image} alt={'Art Piece ' + art.title} />
              <h3>{art.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Art