import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import { Loader } from './Loader';
import { helpHttp } from '../helpers/helpHttp';


const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if(search === null) return ;

    const fetchData = async () => {

      const {artist} = search;


      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      console.log(artistUrl);
   

      setLoading(true);

      const [ artistRes ] = await Promise.all([
        helpHttp().get(artistUrl)
      ]);

      console.log(artistRes)
      setBio(artistRes);

      setLoading(false);

    }

    fetchData();

  }, [ search ])


  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  }

  return (
    <>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch = {handleSearch} />
      {search && !loading && (
        <SongDetails search={search}  bio={bio} />
      )}
      
    </>
  )
}


export default SongSearch;