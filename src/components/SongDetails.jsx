import React from 'react'

 const SongDetails = ( {search, liryc, bio} ) => {
  return (
    <div>
      <h3>Details</h3>
      <SongLirycs />
      <SongArtist />
    </div>
  )
}

export default SongDetails;