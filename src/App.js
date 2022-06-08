import Box from "@mui/material/Box";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cartpage from "./Components/CART/Cartpage";
import Homepage from "./Components/HOMEPAGE/Homepage";
import Loginpage from "./Components/LOGINPAGE/Loginpage";
import SignUp from "./Components/SIGNUP PAGE/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<Box>Contact</Box>} />
        <Route path='/homePage' element={<Homepage/>} />
        <Route path='/cart' element={<Cartpage/>  } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
