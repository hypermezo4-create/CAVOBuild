import { products, getProductBySlug, getProductsByCategory, type Category } from '@/lib/catalog';
export const getAllProducts = () => products;
export const getFeaturedProducts = () => products.filter((product) => product.featured);
export const getOffers = () => products.filter((product) => product.offer);
export const getCategoryProducts = (category: Category) => getProductsByCategory(category);
export const findProduct = (slug: string) => getProductBySlug(slug);
