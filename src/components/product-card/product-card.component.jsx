import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Name,
  Price,
  ProductCardContainer,
  ProductFooter,
} from "./product-card.styles.jsx";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <Name as="span">{name}</Name>
        <Price>{price}</Price>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
