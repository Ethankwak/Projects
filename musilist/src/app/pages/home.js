import Navbar from "../components/navbar.js";
import Header from "../components/header.js";
import SongRow from "../components/song-row.js";
import Link from 'next/link';

function Home() {
    return (
      <>
      <div className="banner">
        <Header />
        <Navbar />
        
      </div>
      <SongRow />
      </>
    );
  }
  
  export default Home;