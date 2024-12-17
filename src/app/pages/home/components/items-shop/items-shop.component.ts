import { Component } from '@angular/core';
import { CardComponent, Product } from '../card/card.component';

@Component({
  selector: 'app-items-shop',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './items-shop.component.html',
  styleUrl: './items-shop.component.css',
})
export class ItemsShopComponent {
  products: Product[] = [
    this.generateProduct({
      id: 1,
      name: 'Baguette Clásica',
      price: 10.99,
      inventoryStatus: 'En Stock',
      image: '',
    }),
    this.generateProduct({
      id: 2,
      name: 'Croissant de Mantequilla',
      price: 15.49,
      inventoryStatus: 'Agotado',
      image: '',
    }),
    this.generateProduct({
      id: 3,
      name: 'Pan Integral',
      price: 8.99,
      inventoryStatus: 'Pocas Unidades',
      image: '',
    }),
    this.generateProduct({
      id: 4,
      name: 'Concha de Vainilla',
      price: 12.0,
      inventoryStatus: 'En Stock',
      image: '',
    }),
    this.generateProduct({
      id: 5,
      name: 'Bolillo Fresco',
      price: 18.75,
      inventoryStatus: 'Agotado',
      image: '',
    }),
    this.generateProduct({
      id: 6,
      name: 'Pan de Centeno',
      price: 22.49,
      inventoryStatus: 'En Stock',
      image: '',
    }),
    this.generateProduct({
      id: 7,
      name: 'Rosca de Azúcar',
      price: 5.99,
      inventoryStatus: 'Pocas Unidades',
      image: '',
    }),
    this.generateProduct({
      id: 8,
      name: 'Pan Brioche',
      price: 30.0,
      inventoryStatus: 'En Stock',
      image: '',
    }),
    this.generateProduct({
      id: 9,
      name: 'Pan de Avena',
      price: 25.5,
      inventoryStatus: 'Agotado',
      image: '',
    }),
    this.generateProduct({
      id: 10,
      name: 'Empanada de Queso',
      price: 19.99,
      inventoryStatus: 'Pocas Unidades',
      image: '',
    }),
  ];

  generateProduct(product: Product): Product {
    return {
      image: `https://picsum.photos/200/300?random=${product.id}`,
      name: product.name,
      price: product.price,
      inventoryStatus: product.inventoryStatus,
      id: product.id,
    };
  }
}
