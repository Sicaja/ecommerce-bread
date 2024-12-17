import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TableModule, CurrencyPipe, ButtonModule, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  private readonly router = inject(Router);

  showDetail = signal(false);

  shoppingCartItems: ShoppingCartItem[] = [
    { id: 1, product: 'Baguette Clásica', quantity: 2, price: 10.99 },
    { id: 2, product: 'Croissant de Mantequilla', quantity: 3, price: 15.49 },
    { id: 3, product: 'Pan Integral', quantity: 1, price: 8.99 },
    { id: 5, product: 'Concha de Vainilla', quantity: 5, price: 12.0 },
    { id: 6, product: 'Bolillo Fresco', quantity: 4, price: 18.75 },
    { id: 7, product: 'Pan de Centeno', quantity: 2, price: 22.49 },
    { id: 8, product: 'Rosca de Azúcar', quantity: 6, price: 5.99 },
    { id: 9, product: 'Pan Brioche', quantity: 3, price: 30.0 },
    { id: 10, product: 'Pan de Avena', quantity: 2, price: 25.5 },
    { id: 11, product: 'Empanada de Queso', quantity: 4, price: 19.99 },
  ];

  toggleDetail(): void {
    this.showDetail.set(!this.showDetail());
  }

  navigateToPayment(): void {
    this.router.navigateByUrl('/pago');
  }
}

export interface ShoppingCartItem {
  id: number;
  product: string;
  quantity: number;
  price: number;
}
