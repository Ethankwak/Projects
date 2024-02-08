"use client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AlbumItem from "./album-item";
import { fetchPopularAlbums } from "../services/get-album";

const PopularAlbumsRow = () => {
  const [popularAlbums, setPopularAlbums] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const albums = await fetchPopularAlbums();
      setPopularAlbums(albums);
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    history.push("../pages/albums");
  };

  return (
    <div className="section">
      <h1>Top Albums</h1>
      <div className="row">
        {popularAlbums.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
      </div>

    </div>
  );
};

export default PopularAlbumsRow;