import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Short description (2–3 sentences).',
    price: 49990,
    rating: 4.7,
    image: 'https://via.placeholder.com/400x300',
    images: [
      'https://via.placeholder.com/400x300?1',
      'https://via.placeholder.com/400x300?2',
      'https://via.placeholder.com/400x300?3'
    ],
    link: 'https://kaspi.kz/shop/p/PASTE-REAL-LINK-1'
  }
];