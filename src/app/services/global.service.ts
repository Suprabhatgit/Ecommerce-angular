import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  singleProduct: any;
  isLogin = false;
  loadingFlag = true;
  navbarFlag = true;
  userType: any;
  // ============
  limited: any[] = [];
  searchBox: any[] = [];
  users: any[] = [];
  cart: any[] = [];
  totalPrice: number = 0;
  wish: any[] = [];
  productImage: any;
  // =============
  allProduct: any[] = [];
  manShoes: any[] = [];
  womanShoes: any[] = [];
  womanDress: any[] = [];
  watches: any[] = [];
  menWatches: any[] = [];
  sunglasses: any[] = [];
  menShirts: any[] = [];
  womanBag: any[] = [];
  lighting: any[] = [];
  smartphones: any[] = [];
  electronics: any[] = [];
  groceries: any[] = [];
  furniture: any[] = [];

  constructor( private http:HttpClient) { }
  baseUrl = 'https://dummyjson.com/';
  // =====================================================
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, data);
  }
 
  // =====================================================
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/`);
  }
  // =====================================================
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}products/${id}`);
  }
  // =====================================================
  deleteSingleProduct(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}products/${id}`);
  }
  // =====================================================
  updateProduct(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}products/${id}`, data);
  }
  // =====================================================
  addNewProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}products/add`, data);
  }
  // =====================================================
  getLimitedProduct(numberProduct: any, id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}products?limit=${numberProduct}&skip=${id}&select=title,price`
    );
  }
  // =====================================================
  getProductBySearch(searchText: any): Observable<any> {
    return this.http.get(`${this.baseUrl}products/search?q=${searchText}`);
  }
  // =====================================================
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}users`);
  }
 
  // =====================================================
  // Get collections
  getFurniture(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/furniture`);
  }
  getGroceries(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/groceries`);
  }
  getelectronics(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/laptops`);
  }
  getSmartPhones(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/smartphones`);
  }
  getLighting(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/lighting`);
  }
  getMenWatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-watches`);
  }
  getWomenWatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-watches`);
  }
  getMensShoes(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-shoes`);
  }
  getWomenShoes(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-shoes`);
  }
  getWomenBags(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-bags`);
  }
  getWomenDresses(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-dresses`);
  }
  getMensShirts(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-shirts`);
  }
  getMensSunglasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/sunglasses`);
  }
}
