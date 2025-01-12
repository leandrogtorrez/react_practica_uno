
import FilterableProductTable from './Default/_components/FilterableProductTable';

const PRODUCTS = [
    {category: "Frutas", price: "$1", stocked: true, name: "  Apple"},
    {category: "Frutas", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Frutas", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Verduras", price: "$2", stocked: true, name: "Spinach"},
    {category: "Verduras", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Verduras", price: "$1", stocked: true, name: "Peas"}
  ];

export default function Product() {
  return <FilterableProductTable products={PRODUCTS} />;
}