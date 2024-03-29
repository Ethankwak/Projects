"use client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SongItem from "./song-item";
import { fetchPopularSongs } from "../services/get-song";

const PopularSongsRow = () => {
  const [popularSongs, setPopularSongs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const songs = await fetchPopularSongs();
      setPopularSongs(songs);
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    history.push("../pages/songs");
  };

  return (
    <div className="section">
      <h1>Top Songs</h1>
      <div className="row">
        {popularSongs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>

    </div>
  );
};

export default PopularSongsRow;