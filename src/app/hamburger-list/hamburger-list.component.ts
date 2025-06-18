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
getPrecioUnitario(hamburger: Hamburger): number {
  return hamburger.clearance ? hamburger.price * 0.85 : hamburger.price;
}
addToCart(hamburger: Hamburger): void {
  if (hamburger.quantity === 0) {
    hamburger.quantity = 1;
  }

  if (hamburger.quantity > 0 && hamburger.quantity <= hamburger.stock) {
    // Calculamos el totalPrice usando el precio con descuento si aplica
    const totalPrice = this.getPrecioUnitario(hamburger) * hamburger.quantity;

    // Agregamos una copia con totalPrice calculado
    this.cart.addToCart({ ...hamburger, totalPrice });

    hamburger.stock -= hamburger.quantity;
    hamburger.quantity = 0;
  } else {
    alert('Cantidad inválida');
  }
}



 ngOnInit(): void {
  this.hamburgersDataService.getAll()
    .subscribe(hamburgers => {
      this.hamburgers = hamburgers.map(h => ({
        ...h,
        price: typeof h.price === 'string' ? parseFloat(h.price) : h.price
      }));
    });
}




}
