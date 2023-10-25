import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import { Loader } from './Loader';


const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [liryc, setLiryc] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSearch = (data) => {
    console.log(data);
  }

  return (
    <>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch = {handleSearch} />
      <SongDetails search={search} liryc={liryc} bio={bio} />
      
    </>
  )
}


export default SongSearch;