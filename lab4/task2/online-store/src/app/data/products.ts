import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];


  private products: Product[] = [
    { id: 101, categoryId: 1, name: 'Samsung Galaxy A07', description: '128gb black', image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000', price: 68700, rating: 4.7, likes: 0 },
    { id: 102, categoryId: 1, name: 'iPhone 17', description: '256gb orange', image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-oranzhevyi-145468241/?c=750000000', price: 879990, rating: 4.6, likes: 0 },
    { id: 103, categoryId: 1, name: 'iPhone 15', description: '128gb black', image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000', price: 402990, rating: 4.5, likes: 0 },
    { id: 104, categoryId: 1, name: 'Redmi A3', description: '64gb black', image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=preview-large', link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000', price: 39990, rating: 4.8, likes: 0 },
    { id: 105, categoryId: 1, name: 'iPhone 17', description: '256gb white', image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-serebristyi-145468150/?c=750000000', price: 915990, rating: 4.4, likes: 0 },

    { id: 201, categoryId: 2, name: 'Apple Macbook Air 13', description: 'SSD 256gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000', price: 499990, rating: 4.6, likes: 0 },
    { id: 202, categoryId: 2, name: 'Lenovo IdeaPad 3', description: 'SSD 256gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000', price: 173890, rating: 4.7, likes: 0 },
    { id: 203, categoryId: 2, name: 'Apple MacBook Pro 16', description: 'SSD 512gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000', price: 699990, rating: 4.4, likes: 0 },
    { id: 204, categoryId: 2, name: 'Aser Aspire 3', description: 'SSD 256gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=preview-large', link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000', price: 165990, rating: 4.8, likes: 0 },
    { id: 205, categoryId: 2, name: 'Apple MacBook Air 13', description: 'SSD 256gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000', price: 459990, rating: 4.5, likes: 0 },

    { id: 301, categoryId: 3, name: 'Headphones GERLAX GH-34', description: 'black', image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000', price: 3990, rating: 4.5, likes: 0 },
    { id: 302, categoryId: 3, name: 'Headphones Apple USB-C', description: 'white', image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000', price: 10460, rating: 4.6, likes: 0 },
    { id: 303, categoryId: 3, name: 'Headphones Apple AirPods 3', description: 'white', image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000', price: 61990, rating: 4.3, likes: 0 },
    { id: 304, categoryId: 3, name: 'Headphones CAT EAR STN-28', description: 'pink', image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/pc1/10279674.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-cat-ear-stn-28-rozovyi-101768468/?c=750000000', price: 10990, rating: 4.8, likes: 0 },
    { id: 305, categoryId: 3, name: 'Headphones Marshall Major V', description: 'black', image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/pa6/95163535.jpeg?format=preview-large', link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-v-chernyi-120483143/?c=750000000', price: 35990, rating: 4.7, likes: 0 },

    { id: 401, categoryId: 4, name: 'Apple iPad A16', description: '128gb white', image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=preview-large', link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000', price: 206990, rating: 4.6, likes: 0 },
    { id: 402, categoryId: 4, name: 'Smart Product 7C', description: '128gb for kids', image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/hf8/85479045136414.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/smart-product-9901-7c-7-kids-tablet-7-djuim-4-gb-128-gb-sinii-117587880/?c=750000000', price: 25990, rating: 4.7, likes: 0 },
    { id: 403, categoryId: 4, name: 'Xiaomi Redmi Pad 2', description: '256gb', image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/airstar-g3000-pluse-10-1-djuim-16-gb-512-gb-chernyi-128606600/?c=750000000', price: 129990, rating: 4.4, likes: 0 },
    { id: 404, categoryId: 4, name: 'Huawei Matepad 11.5', description: '256gb white', image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=preview-large', link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=750000000', price: 229990, rating: 4.8, likes: 0 },
    { id: 405, categoryId: 4, name: 'Huawei MatePad SE', description: '128gb grey', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=preview-large', link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000', price: 79990, rating: 4.5, likes: 0 },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}