import React from 'react';
import './SongArtist.css';

const SongArtist = ( {artist} ) => {


  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <h4>{artist.strStyle}</h4>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>{artist.strBiographyEN}</p>
      <a href={artist.strWebsite}>Website</a>

    </section>
  )
}

export default SongArtist