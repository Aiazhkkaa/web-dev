import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Монитор',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 19990,
    rating: 4.6,
    image: 'data:image/jpeg;base64,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',
    images: [
      'https://via.placeholder.com/400x300?text=Product+1+Img1',
      'https://via.placeholder.com/400x300?text=Product+1+Img2',
      'https://via.placeholder.com/400x300?text=Product+1+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 2,
    name: 'Диван-офисный',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 299990,
    rating: 4.2,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWv-C4Mmg5ezgYAqkUQzhYTpShqwd-wSlB6mds8nCdpGpH8gIJu4_7H09xDlL-Jp_W_8oF4UL-pRjboZCYCJsy5elR0NsHd5DZpCtix0pBYwr1&usqp=CAc',
    images: [
      'https://via.placeholder.com/400x300?text=Product+2+Img1',
      'https://via.placeholder.com/400x300?text=Product+2+Img2',
      'https://via.placeholder.com/400x300?text=Product+2+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 3,
    name: 'Apple Airpods Pro',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 31000,
    rating: 4.8,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsql9YedxK7-8YWvPV_JQK2XZe1Ge2-APKeced_dnx9LrgdVJVdoeMPjXapimRLDNbEay68md6xbBuIcUqgJmTHgOA4UI9-8b3EFBKgU1mJOE&usqp=CAc',
    images: [
      'https://via.placeholder.com/400x300?text=Product+3+Img1',
      'https://via.placeholder.com/400x300?text=Product+3+Img2',
      'https://via.placeholder.com/400x300?text=Product+3+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 4,
    name: 'Аэрогриль',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 37000,
    rating: 4.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/p24/114395643.png?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+4+Img1',
      'https://via.placeholder.com/400x300?text=Product+4+Img2',
      'https://via.placeholder.com/400x300?text=Product+4+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 5,
    name: 'ТВ-тумба',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 24990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+5+Img1',
      'https://via.placeholder.com/400x300?text=Product+5+Img2',
      'https://via.placeholder.com/400x300?text=Product+5+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 6,
    name: 'Вешалка',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 21990,
    rating: 3.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+6+Img1',
      'https://via.placeholder.com/400x300?text=Product+6+Img2',
      'https://via.placeholder.com/400x300?text=Product+6+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 7,
    name: 'Проектор',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 15990,
    rating: 4.1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pa2/60773776.jpg?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+7+Img1',
      'https://via.placeholder.com/400x300?text=Product+7+Img2',
      'https://via.placeholder.com/400x300?text=Product+7+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 8,
    name: 'Баатарейка',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 1389,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/he8/64043528060958.jpg?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+8+Img1',
      'https://via.placeholder.com/400x300?text=Product+8+Img2',
      'https://via.placeholder.com/400x300?text=Product+8+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 9,
    name: 'Алиса',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 27990,
    rating: 4.3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+9+Img1',
      'https://via.placeholder.com/400x300?text=Product+9+Img2',
      'https://via.placeholder.com/400x300?text=Product+9+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
  {
    id: 10,
    name: 'Джостики',
    description: 'Short description. 2–3 sentences. Simple and clear.',
    price: 74990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/hf6/65102527954974.jpg?format=preview-large',
    images: [
      'https://via.placeholder.com/400x300?text=Product+10+Img1',
      'https://via.placeholder.com/400x300?text=Product+10+Img2',
      'https://via.placeholder.com/400x300?text=Product+10+Img3',
    ],
    link: 'PASTE_REAL_KASPI_LINK_HERE'
  },
];