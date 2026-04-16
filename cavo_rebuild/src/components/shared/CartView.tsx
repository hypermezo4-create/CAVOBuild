"use client";

import Link from 'next/link';
import { products } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function CartView() {
  const { cart, addToCart, removeFromCart, locale } = useAppState();
  const copy = labels[locale];
  const detailedItems = cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
    .filter((item) => item.product);
  const total = detailedItems.reduce((sum, item) => sum + item.quantity * (item.product?.price || 0), 0);

  if (!detailedItems.length) {
    return (
      <section className="shell-card empty-card">
        <h2>{copy.emptyCart}</h2>
        <p>{copy.emptyCartText}</p>
        <Link href="/categories" className="primary-pill">{copy.continueShopping}</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      {detailedItems.map((item) => (
        <article key={`${item.productId}-${item.size}`} className="cart-card shell-card">
          <img src={item.product!.poster} alt={item.product!.title} />
          <div className="cart-card-copy">
            <h3>{item.product!.title}</h3>
            <p>{copy.size}: {item.size}</p>
            <strong>{item.product!.price.toLocaleString()} EGP</strong>
            <div className="qty-row">
              <button type="button" className="round-icon" onClick={() => removeFromCart(item.productId, item.size)}>−</button>
              <span>{copy.qty}: {item.quantity}</span>
              <button type="button" className="round-icon" onClick={() => addToCart(item.productId, item.size)}>+</button>
            </div>
          </div>
        </article>
      ))}
      <section className="shell-card summary-card">
        <div>
          <p className="micro-label">CAVO</p>
          <h2>{total.toLocaleString()} EGP</h2>
        </div>
        <Link href="/auth" className="primary-pill">{copy.login}</Link>
      </section>
    </div>
  );
}
