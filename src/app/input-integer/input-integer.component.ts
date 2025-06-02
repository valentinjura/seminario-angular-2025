import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hamburger } from '../hamburger-list/hamburger';



@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {
@Input() quantity: number = 0;  // quantity es un número, por eso inicializo en 0
@Input() max: number = 0;
@Output() quantityChange = new EventEmitter<number>();
@Output() maxReached = new EventEmitter<string>();


  upQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
        this.maxReached.emit("Se alcanzó el stock máximo disponible.");
    }
  }

  downQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(): void {
    if (this.quantity < 0) {
      this.quantity = 0;
    }

    if (this.quantity > this.max) {
      this.quantity = this.max;
    }
  }
  
}
