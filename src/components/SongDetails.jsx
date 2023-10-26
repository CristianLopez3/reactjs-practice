import React from "react";
import SongLirycs from "./SongLirycs";
import SongArtist from "./SongArtist";
import { Message } from "./Message";

const SongDetails = ({ search, bio }) => {
  if (!bio) return null;

  return (
    <>
      {bio.artists ? (
        <SongArtist  artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no exite el artista ${search.artist}`}
          bgColor="dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
