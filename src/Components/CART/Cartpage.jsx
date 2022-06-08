import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import BaseAxiosApi from "../../API/BaseAxiosApi";
import CartContext from "../../Context/CartContext";
import ItemCard from "../HOMEPAGE/Components/ItemCard";
import Navabr from "../HOMEPAGE/Components/Navabr";
import CartcardComponent from "./CartcardComponent";

function Cartpage() {
const [cart,setCart]=useContext(CartContext)
  return (
    <>
      <Navabr />
      <Container sx={{ mt: "20px" }} maxWidth="md">
        <Grid container>
          {cart?.map((item) => {
            return (
              <Grid sx={{ p: "10px" }} item xs={4} md={4}>
                <CartcardComponent item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Cartpage;
