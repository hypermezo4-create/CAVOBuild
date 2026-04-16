import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/catalog';
import { ProductDetailsClient } from '@/components/shared/ProductDetailsClient';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
  return <ProductDetailsClient product={product} related={related} />;
}
