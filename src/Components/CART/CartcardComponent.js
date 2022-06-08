import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import BaseAxiosApi from "../../API/BaseAxiosApi";
import CartContext from "../../Context/CartContext";

function CartcardComponent({ item }) {
  const [cart, setCart] = useContext(CartContext);
  const HandleRemove = () => {
    BaseAxiosApi.patch("/products/RemoveFromCart", {
      id: item.productId._id,
    }).then(({ data }) => {
      BaseAxiosApi.get("products/getCartItems").then(({ data }) => {
        setCart(data);
      });
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
        image={item.productId.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.productId.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.productId.description.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => HandleRemove()}
          fullWidth
          sx={{ color: "error.dark" }}
        >
          Remove from cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartcardComponent;
