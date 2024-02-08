import Header from "../components/header.js";
import SongRow from "../components/song-row.js";
import Navbar from "../components/navbar.js";
import AlbumRow from "../components/album-row.js"
import ArtistRow from "../components/artist-row.js"
import Link from 'next/link.js';

function Home() {
    return (
      <>
      <div className="pageLayout"> 
        <div className="banner">
          <Header /> 
          <div className="content"> 
            <SongRow/>
            <AlbumRow/>
            <ArtistRow/>
          </div>       
       </div>
       <Navbar />
      </div>
      </>
      
    );
  }
  
  export default Home;