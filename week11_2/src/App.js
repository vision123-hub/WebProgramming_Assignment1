import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <main className="assignment">
      <header className="assignment__header">
        <p className="assignment__eyebrow">WEEK 11_2 · REACT CODE CHALLENGE</p>
        <h1>ProductCard</h1>
        <p className="assignment__intro">
          A reusable product card that displays product details and stock
          availability from props.
        </p>
      </header>

      <section aria-labelledby="examples-heading">
        <div className="assignment__section-heading">
          <h2 id="examples-heading">Component examples</h2>
          <p>The second card shows how the stock label changes with its prop.</p>
        </div>
        <div className="product-grid">
          <ProductCard
            name="Wireless Earbuds"
            price={89000}
            rating={4.5}
            inStock={true}
          />
          <ProductCard
            name="Travel Speaker"
            price={65000}
            rating={4}
            inStock={false}
          />
        </div>
      </section>

      <section className="assignment__usage" aria-labelledby="usage-heading">
        <h2 id="usage-heading">Usage</h2>
        <pre>
          <code>
            {'<ProductCard name="Wireless Earbuds" price={89000} rating={4.5} inStock={true} />'}
          </code>
        </pre>
      </section>
    </main>
  );
}

export default App;
