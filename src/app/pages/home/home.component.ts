import { Component } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { ItemsShopComponent } from './components/items-shop/items-shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MemberShipCardComponent } from './components/memberShipCard/memberShipCard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    ItemsShopComponent,
    ShoppingCartComponent,
    MemberShipCardComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
