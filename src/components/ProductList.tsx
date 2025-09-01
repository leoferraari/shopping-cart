import Product from "./Product";

const products = [
  { id: 1, name: "Produto A", category: "Categoria A", price: 10 },
  { id: 2, name: "Produto B", category: "Categoria B", price: 20 },
  { id: 3, name: "Produto C", category: "Categoria C", price: 30 },
  { id: 4, name: "Produto D", category: "Categoria D", price: 30 },
  { id: 5, name: "Produto E", category: "Categoria E", price: 30 },
  { id: 6, name: "Produto F", category: "Categoria F", price: 30 },
  { id: 7, name: "Produto G", category: "Categoria G", price: 30 },
  { id: 8, name: "Produto H", category: "Categoria H", price: 30 },
  { id: 9, name: "Produto I", category: "Categoria I", price: 30 },
  { id: 10, name: "Produto J", category: "Categoria J", price: 30 },
];

export default function ProductList() {
    return (
      <div className="w-full">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 justify-center">
          {products.map((p) => (
            <li key={p.id} className="p-4">
              <Product item={p} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
