export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Buscar..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
