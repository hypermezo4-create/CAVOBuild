import type { Product } from '@/lib/catalog';
import { ProductCard } from '@/components/shared/ProductCard';

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
