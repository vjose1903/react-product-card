import React from "react";
import "./ProductCard.css";
import { Iproduct } from "../../App";

const ProductCard: React.FC<Iproduct> = ({
  name,
  price,
  description,
  image,
  condition,
}) => {
  let conditionDiv;

  if (condition)
    conditionDiv = <div className="condition-div">{condition}</div>;

  return (
    <div className="resize-container  w-full h-full ">
      <div className="w-full h-full product-card rounded-lg border border-black-10 shadow-md">
        <img className="product-image h-full object-contain" src={image} />
        <h2 className="product-name">{name}</h2>
        <span className="product-description">{description}</span>
        <p className="product-price">{price}</p>
        {conditionDiv}
      </div>
    </div>
  );
};

export default ProductCard;
