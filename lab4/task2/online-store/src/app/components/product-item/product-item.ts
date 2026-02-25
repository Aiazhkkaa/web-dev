import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes += 1;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  shareWhatsapp() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check this product: ${this.product.name}`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check this product: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}