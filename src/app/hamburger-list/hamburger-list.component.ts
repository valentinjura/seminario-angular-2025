import { Component } from '@angular/core';
import {Hamburger} from './hamburger';
import { HamburgerCartService } from '../hamburger-cart.service';
import { HamburgerDataService } from '../hamburger-data.service';
@Component({
  selector: 'app-hamburger-list',
  standalone: false,
  templateUrl: './hamburger-list.component.html',
  styleUrl: './hamburger-list.component.scss'
})
export class HamburgerListComponent {

  hamburgers:Hamburger [] = [];

  constructor(  //inyectamos el servicio
    private cart: HamburgerCartService,
    private hamburgersDataService: HamburgerDataService
  ){  
  }

  

downQuantity(hamburger: Hamburger): void {
  if (hamburger.quantity > 0) {
    hamburger.quantity--;
  }
}
upQuantity(hamburger: Hamburger): void {
  if (hamburger.quantity < hamburger.stock) {
    hamburger.quantity++;
  }
}
changeQuantity(hamburger: Hamburger): void {
  // Si el valor es menor que 0 → lo dejamos en 0
  if (hamburger.quantity < 0) {
    hamburger.quantity = 0;
  }

  // Si el valor es mayor que el stock → lo dejamos en stock
  if (hamburger.quantity > hamburger.stock) {
    hamburger.quantity = hamburger.stock;
  }
}
maxReached(mensaje:string){
  alert(mensaje);
}
addToCart(hamburger: Hamburger): void {
    if (hamburger.quantity === 0) {
        hamburger.quantity = 1;
    }

    this.cart.addToCart(hamburger);
    hamburger.stock -= hamburger.quantity;
    hamburger.quantity = 0;
}
  ngOnInit(): void{
    this.hamburgersDataService.getAll()
    .subscribe(hamburgers => this.hamburgers = hamburgers);

  }



}
