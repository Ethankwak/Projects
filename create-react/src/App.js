import "./CSS/styles/styles.scss";
import Navbar from "../../create-react/src/components/navbar.js";
import Header from "../../create-react/src/components/header.js";
import Home from "../../create-react/src/pages/home.js"

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
