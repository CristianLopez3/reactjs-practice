import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import { Loader } from './Loader';
import { helpHttp } from '../helpers/helpHttp';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {Page404} from "./Page404.jsx";


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


      <HashRouter>
        <header>
          <h2>Song Search</h2>
          <nav>
            <Link to='/'>home</Link>
            <Link to=''></Link>
          </nav>
        </header>

        {loading && <Loader />}

        <Routes>
          <Route path="/" element={
            <>
              <SongForm handleSearch = {handleSearch} />
              <h2> Tabla de Canciones </h2>
              {search && !loading && (
                  <SongDetails search={search}  bio={bio} />
              )}
            </>
          } />

          <Route path="song/:id" element={
            <>
              <h2> Songs Page </h2>
            </>
          } />

          <Route path="*" element={<Page404 />} />

        </Routes>
      </HashRouter>
      
    </>
  )
}


export default SongSearch;