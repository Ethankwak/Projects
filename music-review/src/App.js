import "./CSS/styles/styles.scss";
import Navbar from "./navbar.js";
import Header from "./header.js";
import Songs from "./songs.js"

function App() {
  return (
    <div className="banner">
      <Header />
      <Navbar />
      <Songs />
    </div>
  );
}

export default App;
