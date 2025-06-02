import { Component } from '@angular/core';
import { HamburgerCartService } from '../hamburger-cart.service';
import { Hamburger } from '../hamburger-list/hamburger';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cartList$: Observable<Hamburger[]>;

  constructor(private cart: HamburgerCartService){
     this.cartList$  = cart.cartList.asObservable(); //inyectamos el servicio
    }
  
}
