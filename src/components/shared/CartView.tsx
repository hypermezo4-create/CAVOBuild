"use client";

import Link from 'next/link';
import { products } from '@/lib/catalog';
import { useAppState } from '@/components/shared/AppProviders';

export function CartView() {
  const { cart, addToCart, removeFromCart } = useAppState();
  const detailedItems = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) })).filter((item) => item.product);
  const total = detailedItems.reduce((sum, item) => sum + item.quantity * (item.product?.price || 0), 0);

  if (!detailedItems.length) {
    return (
      <section className="glass-card empty-state">
        <h2>السلة لسه فاضية</h2>
        <p className="muted">اختار الموديل اللي يعجبك وابدأ جمع الطلبات.</p>
        <Link href="/categories" className="primary-button">استكشف المنتجات</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      {detailedItems.map((item) => (
        <article key={`${item.productId}-${item.size}`} className="cart-card glass-card">
          <img src={item.product!.poster} alt={item.product!.title} />
          <div className="cart-card-copy">
            <h3>{item.product!.title}</h3>
            <p className="muted">مقاس {item.size}</p>
            <strong>{item.product!.price.toLocaleString()} EGP</strong>
            <div className="qty-row">
              <button type="button" className="icon-button" onClick={() => removeFromCart(item.productId, item.size)}>−</button>
              <span>{item.quantity}</span>
              <button type="button" className="icon-button" onClick={() => addToCart(item.productId, item.size)}>+</button>
            </div>
          </div>
        </article>
      ))}
      <section className="checkout-card glass-card">
        <div>
          <p className="eyebrow small">الإجمالي بعد الخصم</p>
          <h2>{total.toLocaleString()} EGP</h2>
        </div>
        <Link href="/auth" className="primary-button">إكمال الطلب</Link>
      </section>
    </div>
  );
}
