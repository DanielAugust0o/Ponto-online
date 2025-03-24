import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./Components/Home/home";

function AppRoutes ()  {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login /> }></Route>
                <Route path="/home" element={<Home /> }></Route>


            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes