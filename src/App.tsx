import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";

interface Iproduct {
  price: number;
}

const profucts: Array<Iproduct> = [{ price: 1.99 }];

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div style={{ width: "300px", height: "200px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "300px", height: "200px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "300px", height: "200px" }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "250px", height: "150px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "250px", height: "150px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "250px", height: "150px" }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "200px", height: "120px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "200px", height: "120px" }}>
          <ProductCard />
        </div>
        <div style={{ width: "200px", height: "120px" }}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
