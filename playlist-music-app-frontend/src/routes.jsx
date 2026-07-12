import { BrowserRouter, Routes, Route } from "react-router"; //this is what we need from react router to define routes
import { useParams } from "react-router"; // basically react version of req.params
import { useSearchParams } from "react-router"; // basically req.query
import NavBar from "./components/Navbar";
import Home from "./components/home";

function AppRoutes() {
    return (
        <NavBar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route/>
                <Route/> */}
                <Route path='*' element={<NotFounds/>}/>
            </Routes>
        </NavBar>
    )
}

export default AppRoutes