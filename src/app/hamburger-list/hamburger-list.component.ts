import { Component } from '@angular/core';
import {Hamburger} from './hamburger';
@Component({
  selector: 'app-hamburger-list',
  standalone: false,
  templateUrl: './hamburger-list.component.html',
  styleUrl: './hamburger-list.component.scss'
})
export class HamburgerListComponent {
 hamburgers : Hamburger[] = [
    {
      name: "Cheeseburger",
      type: "Carne",
      price: 2500,
      stock: 15,
      image: "assets/img/Cheeseburger.jpg",
      clearance : false,
      quantity : 0

    },
    {
      name: "Chicken Crispy",
      type: "Pollo",
      price: 2700,
      stock: 10,
      image: "assets/chicken.jpg",
      clearance : true,
      quantity : 0
    },
    {
      name: "Veggie Delight",
      type: "Vegetariana",
      price: 2400,
      stock: 0,
      image: "assets/veggie.jpg",
      clearance : false,
      quantity : 0
    },
    {
      name: "Bacon BBQ Burger",
      type: "Carne",
      price: 2900,
      stock: 12,
      image: "assets/bacon-bbq.jpg",
      clearance : true,
      quantity : 0
    },
    {
      name: "Spicy Chicken Burger",
      type: "Pollo Picante",
      price: 2750,
      stock: 0,
      image: "assets/spicy-chicken.jpg",
      clearance : false,
      quantity : 0
    },
    {
      name: "Double Beef Burger",
      type: "Doble Carne",
      price: 3100,
      stock: 9,
      image: "assets/double-beef.jpg",
      clearance : false,
      quantity : 0
    },
    {
      name: "Mushroom Swiss Burger",
      type: "Carne",
      price: 2800,
      stock: 5,
      image: "assets/mushroom-swiss.jpg",
      clearance : false,
      quantity : 0
    },
    {
      name: "Falafel Burger",
      type: "Vegetariana",
      price: 2300,
      stock: 6,
      image: "assets/falafel.jpg",
      clearance : false,
      quantity : 0
    }
  ];

  constructor(){}

  

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


}
