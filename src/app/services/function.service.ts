import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  qty: number = 1;
  cartArray: any[] = [];
  wishArray: any[] = [];
 
  myWish: any = [];
  cartCount: number = 0;
  wishCount: number = 0;

  constructor(private http:HttpClient, public global:GlobalService) { 
    if (this.readFromStorage('cart')) {
      this.global.cart = this.readFromStorage('cart');
      this.updateTotalPrice(this.global.cart);
      this.cartCount = this.global.cart.length;
    }
    if (this.readFromStorage('wish')) {
      this.myWish = this.readFromStorage('wish');
      this.wishCount = this.myWish.length;
    }
  }
  filterProduct(option: any, product: any) {
    if (option.value == 'Low') {
      product.sort((a: any, b: any) => Number(a.price) - Number(b.price));
    } else if (option.value == 'High') {
      product.sort((a: any, b: any) => Number(b.price) - Number(a.price));
    } else if (option.value == 'A-Z') {
      product.sort(
        function (low: any, high: any) {
          if (low.title < high.title) {
            return -1;
          } else if (low.title > high.title) {
            return 1;
          } else {
            return 0;
          }
        }
        // console.log(this.global.limited.slice(0, 9));
      );
    } else if (option.value == 'Z-A') {
      product.sort(
        function (low: any, high: any) {
          if (low.title > high.title) {
            return -1;
          } else if (low.title < high.title) {
            return 1;
          } else {
            return 0;
          }
        }
        // console.log(this.global.limited.slice(0, 9));
      );
    }
  }
  // =====================================================
  calculateRating(value: number) {
    let val = value - Math.trunc(value);
    if (val <= 0.5 && val != 0) return Math.floor(value) + 0.5;
    else if (val == 0) {
      return value;
    } else {
      return Math.ceil(value);
    }
  }
  // =====================================================
 
  addToCart(data: any, eve: any) {
    eve.target.disabled = true;
    // this.initialQty();
    this.cartArray.push(data);
    this.writeToStorage(this.cartArray, 'cart');
    this.global.cart = this.readFromStorage('cart');
    this.updateTotalPrice(this.global.cart);
    this.cartCount = this.global.cart.length;
  }
 
  // =====================================
  addToWish(data: any, eve: any) {
    eve.target.disabled = true;
    this.wishArray.push(data);
    this.writeToStorage(this.wishArray, 'wish');
    this.myWish = this.readFromStorage('wish');
    this.wishCount = this.myWish.length;
  }
  // =====================================================
  inStock(value: any) {
    if (value > 0) return 'IN STOCK';
    else {
      return 'OUT STOCK';
    }
  }
  // =========================================
 
  all: any;
  readFromStorage(key = `products`) {
    this.all = localStorage.getItem(key) as String;
 
    return (this.global.cart = JSON.parse(this.all));
  }
 
  //===================================
  writeToStorage(data: any, key = `products`) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  //===================================
 
  //===================================
  // this.qty: number = 1
  public updateTotalPrice(data: any = []) {
    let subs = 0;
    if (data) {
      for (const item of data) {
        if (!item.qty) {
          item.qty = 1;
        }
        // item.qty = 1;
        subs += item.price * item.qty;
        // console.log(item.qty);
      }
    }
 
    this.global.totalPrice = subs;
  }
  
}
