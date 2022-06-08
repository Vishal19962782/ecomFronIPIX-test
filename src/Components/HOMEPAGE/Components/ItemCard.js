import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import BaseAxiosApi from "../../../API/BaseAxiosApi";
import CartContext from "../../../Context/CartContext";

function ItemCard({ item }) {
  const [cart, setCart] = useContext(CartContext);
  const AddToCart = () => {
    BaseAxiosApi.patch(`products/addToCart/${item._id}`)
      .then(() => {
        BaseAxiosApi.get("products/getCartItems").then(({data}) => {});
      })
      .catch((e) => {
        alert(e.response.data);
      });
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 345,
        minHeight: "400px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => AddToCart()} fullWidth>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
