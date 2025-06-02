import { Injectable } from '@angular/core';
import { Hamburger } from './hamburger-list/hamburger';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/**
 * maneja la logica del carrito
**/
export class HamburgerCartService {
  private _cartList: Hamburger[] = [];
  cartList: BehaviorSubject<Hamburger[]> = new BehaviorSubject<Hamburger[]>([]);

  

addToCart(hamburger: Hamburger) {
   let item: Hamburger | undefined = this._cartList.find(v1 => v1.name == hamburger.name);

    if (!item) {
        this._cartList.push({ ...hamburger });
    } else {
        item.quantity += hamburger.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);//equivalente al emit de eventos
}


  
}
