"use client";
import React from "react";

const SongItem = ({ song }) => {
  return (
    <div className="item">
      <img src={song.coverArt} alt={song.name} className="coverArt" />
      <div className="textArea">
        <p className="mainText">{song.name}</p>
        <p className="text">{song.artist}</p>
        <p className="seperator"> · </p>
        <p className="text3">{song.album}</p>
      </div>
    </div>
  );
};

export default SongItem;