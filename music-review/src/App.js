import "./CSS/styles/styles.scss";
import Navbar from "../../musilist/src/app/components/navbar.js";
import Header from "../../musilist/src/app/components/header.js";
import Home from "../../musilist/src/app/pages/home.js"

function App() {
  return (
    <div className="banner">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
