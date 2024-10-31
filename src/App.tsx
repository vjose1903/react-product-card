import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";

export interface Iproduct {
  price: number;
  name: string;
  description: string;
  image: string;
  condition?: string;
}

const profucts: Array<Iproduct> = [
  {
    price: 1.99,
    name: "Water Bottle",
    description: "fresh mineral water bottle.",
    image: `${process.env.PUBLIC_URL}/img/water-bottle.png`,
    condition: undefined,
  },
  {
    price: 5.99,
    name: "Breast",
    description: "Chicken breast with optional protein",
    image: `${process.env.PUBLIC_URL}/img/breast.png`,
    condition: "With club card. Limit 2 offer",
  },
  {
    price: 1.99,
    name: "Oil",
    description: "Pure soybean oil.",
    image: `${process.env.PUBLIC_URL}/img/oil.png`,
    condition: undefined,
  },
];

const rowStyles = [
  { width: "300px", height: "200px" },
  { width: "250px", height: "150px" },
  { width: "170px", height: "120px" },
];

function App() {
  return (
    <div className="flex flex-col gap-2 p-4">
      {rowStyles.map((style) => {
        return (
          <div className="flex gap-2">
            {profucts.map((product) => {
              return (
                <div style={style}>
                  <ProductCard
                    description={product.description}
                    price={product.price}
                    name={product.name}
                    image={product.image}
                    condition={product.condition}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
