"use client";
import React from "react";

const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <img src={song.coverArt} alt={song.name} className="coverArt" />
      <div className="textArea">
        <p className="title">{song.name}</p>
        <p className="artist">{song.artist}</p>
        <p className="seperator"> · </p>
        <p className="album">{song.album}</p>
      </div>
    </div>
  );
};

export default SongItem;