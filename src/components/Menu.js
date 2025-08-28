import pizzaData from "../utils/pizzaData";

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <li
                key={pizza.name}
                className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
              >
                <img src={pizza.photoName} alt={pizza.name} />
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <p className="price">${pizza.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
