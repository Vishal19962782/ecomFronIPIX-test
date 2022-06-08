import {
  AppBar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import BaseAxiosApi from "../../../API/BaseAxiosApi";
import CartContext from "../../../Context/CartContext";

function Navabr() {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    BaseAxiosApi.get("/products/getUserInfo").then(({ data }) => {
      console.log(data.cart);
      setCart(data.cart);
    });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Link to="/homepage" style={{ color: "white" }}>
            Shop
          </Link>
        </Typography>
        <Stack direction gap={4}>
          <IconButton onClick={() => navigate("/cart")}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon sx={{ color: "background.paper" }} />
            </Badge>
          </IconButton>
          <IconButton onClick={()=>handleLogout() }>
            <LogoutIcon sx={{ color: "background.paper" }} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navabr;
