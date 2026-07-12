import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import './App.css'
import AppRoutes from "./routes.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// function App() {

//   return (


//     <div>
//       <Navbar/>
//       <Home/>
//     </div>
//   )
// }

// export default App
