import { BrowserRouter, Routes, Route } from "react-router";
import { useParams } from "react-router";
import { useSearchParams } from "react-router";
import NavBar from "./components/Navbar";
import Home from "./pages/home";

function AppRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/playlists/:id' element={<PlaylistDetail/>}/> */}
                {/* <Route path='*' element={<NotFound/>}/> */}
            </Routes>
        </>
    )
}

export default AppRoutes