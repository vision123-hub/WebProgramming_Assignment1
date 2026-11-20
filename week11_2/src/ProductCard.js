import './ProductCard.css';

const wonFormatter = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
  maximumFractionDigits: 0,
});

function ProductCard({ name, price, rating, inStock }) {
  return (
    <article className="product-card" aria-label={`${name} product card`}>
      <div className="product-card__topline">
        <span className="product-card__eyebrow">PRODUCT</span>
        <span
          className={`product-card__availability ${
            inStock ? 'product-card__availability--available' : ''
          }`}
          role="status"
        >
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__price">{wonFormatter.format(price)}</p>
      <p className="product-card__rating">
        <span aria-hidden="true">★</span> {rating.toFixed(1)} / 5 stars
      </p>
    </article>
  );
}

export default ProductCard;
