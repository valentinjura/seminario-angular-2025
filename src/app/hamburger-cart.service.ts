import { Injectable } from '@angular/core';
import { Hamburger } from './hamburger-list/hamburger';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerCartService {
  private _cartList: Hamburger[] = [];
  cartList: BehaviorSubject<Hamburger[]> = new BehaviorSubject<Hamburger[]>([]);

  // Subject para comunicar incrementos de stock
  stockIncrement: Subject<{ name: string; amount: number }> = new Subject();

  addToCart(hamburger: Hamburger) {
    // Calculamos el precio unitario con descuento si corresponde
    const priceUnit = hamburger.clearance ? hamburger.price * 0.85 : hamburger.price;

    const item = this._cartList.find(v1 => v1.name === hamburger.name);

    if (!item) {
      // Agrega nuevo ítem con totalPrice calculado usando precio con descuento
      this._cartList.push({
        ...hamburger,
        price: priceUnit,            // para que el precio unitario quede con descuento
        totalPrice: priceUnit * hamburger.quantity
      });
    } else {
      // Actualiza cantidad y totalPrice usando precio con descuento
      item.quantity += hamburger.quantity;
      item.price = priceUnit;  // actualizar precio unitario si querés
      item.totalPrice = priceUnit * item.quantity;
    }

    this.cartList.next(this._cartList);
  }
   

  
}
