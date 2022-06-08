import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseAxiosApi from "../../API/BaseAxiosApi";
import CartContext from "../../Context/CartContext";
import ItemCard from "./Components/ItemCard";
import Navabr from "./Components/Navabr";

function Homepage() {
  const [items, setItems] = React.useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    BaseAxiosApi.get("/products")
      .then(({ data }) => {
        setItems(data);
      })
  }, []);
  return (
    <>
      <Navabr />
      <Container sx={{ mt: "20px" }} maxWidth="md">
        <Grid container>
          {items.map((item) => {
            return (
              <Grid sx={{ p: "10px" }} item xs={4} md={4}>
                <ItemCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Homepage;
