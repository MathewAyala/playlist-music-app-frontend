// import {BrowserRouter , Routes , Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <section>
        <form className="search">
          <input type="text" placeholder="playlist name" onChange={(e)=> set} />
          <input type="text" placeholder="Description" onChange={(e) => set}/>
        </form>
        <Home />
      </section>
    </div>
  );
}

export default App;
