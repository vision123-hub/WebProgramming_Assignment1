import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  test('displays the product details and available status', () => {
    render(
      <ProductCard
        name="Wireless Earbuds"
        price={89000}
        rating={4.5}
        inStock={true}
      />
    );

    expect(screen.getByRole('heading', { name: 'Wireless Earbuds' })).toBeInTheDocument();
    expect(screen.getByText('₩89,000')).toBeInTheDocument();
    expect(screen.getByText('4.5 / 5 stars')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('In Stock');
  });

  test('shows Out of Stock when the product is unavailable', () => {
    render(
      <ProductCard
        name="Travel Speaker"
        price={65000}
        rating={4}
        inStock={false}
      />
    );

    expect(screen.getByRole('status')).toHaveTextContent('Out of Stock');
  });
});
