"use client";
import React from "react";

const ArtistItem = ({ artist }) => {
  return (
    <div className="item">
      <img src={artist.profilePicture} alt={artist.artist} className="profilePicture" />
      <div className="textArea">
        <p className="artistName">{artist.artist}</p>
      </div>
    </div>
  );
};

export default ArtistItem;