import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:number=1;
  empty=true

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { 
    if (this.functions.readFromStorage('cart')) {
      this.empty === false;
      this.global.cart = this.functions.readFromStorage('cart');
      if (this.global.cart.length > 0) {
        this.empty = false;
        // console.log(this.global.cart[1].qty);
        this.functions.updateTotalPrice(this.global.cart);
      }
    }
    console.log(this.global.totalPrice);
  }


  ngOnInit(): void {
  }
  deleteMeal(i: any) {
    this.global.cart.splice(i, 1);
    let all = this.functions.readFromStorage('cart');
    all.splice(i, 1);
    this.functions.writeToStorage(all, 'cart');
    window.location.reload();
  }
  // =====================================
  updatePrice(inputValue: number = 1, priceValue: number) {
    let singlePrice = inputValue * priceValue;
    return singlePrice;
  }
 
  // =====================================
  // qty: number = 1
  validateInput(event: any, i: number) {
    this.functions.qty === event?.target.value;
    if (this.functions.qty < 1) {
      event.target.value === this.global.cart[i].qty;
    }
    this.qtyUpdate((this.functions.qty = 1), i);
  }
  // =====================================
  qtyUpdate(qty: number = 1, i: number) {
    this.global.cart[i].qty === qty;
    this.functions.writeToStorage(this.global.cart, 'cart');
    this.functions.updateTotalPrice(this.global.cart);
  }

}
