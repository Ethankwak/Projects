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
    <div>
      <h1 className="sectionName">Top Songs</h1>
      <div className="row">
        {popularSongs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>
      <button onClick={handleRedirect}>View All Popular Songs</button>
    </div>
  );
};

export default PopularSongsRow;