import { Component } from '@angular/core';
import { ProductService } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}