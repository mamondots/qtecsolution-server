export type TProduct = {
  title: string;
  description: string;
  price: number;
  mrpPrice: number;
  quintity: number;
  category: string;
  size: [];
  image: string;
  freeShipping: boolean;
  sku?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'pre_order';
  labels?: 'New' | 'Best Seller' | 'Limited Stock' | 'Sale' | 'Featured';
};
