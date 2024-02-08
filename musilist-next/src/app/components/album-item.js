"use client";
import React from "react";

const AlbumItem = ({ album }) => {
  return (
    <div className="item">
      <img src={album.coverArt} alt={album.name} className="coverArt" />
      <div className="textArea">
        <p className="mainText">{album.name}</p>
        <p className="text">{album.artist}</p>
        <p className="seperator"> · </p>
        <p className="text3">{album.album}</p>
      </div>
    </div>
  );
};

export default AlbumItem;