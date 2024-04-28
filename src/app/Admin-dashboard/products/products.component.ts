import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  fromLowToHigh = true;
  highToLow = true;
  option = '';
  product: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  electronics: any = [];
  firstProduct: any = [];

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private ActivatedRoute: ActivatedRoute,
    private _route: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    this.getProductId(0, 100);
   }
   getProduct(ele: any) {
    ele.forEach((e: any) => {
      this.global.getSingleProduct(e.id).subscribe((data: any) => {
        this.global.limited.push(data);
      });
    });
  }
  // ===================================================
  getProductId(n: any, i: any) {
    this.global.getLimitedProduct(0, 0).subscribe(
      (data) => {
        this.product = data?.products;
        this.product.sort(
          (a: any, b: any) => Number(a.price) - Number(b.price)
        );
        this.getProduct(this.product.slice(n, i));
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
  }

  //====================BUTTON SHOW MORE======================
  idFirst: number = 0;
  idLast: number = 12;
  showMore() {
    // this.idFirst = this.idFirst + 9;
    this.idLast = this.idLast + 12;
    console.log(this.idLast);
  }
  // =========================================================
  delProduct: any[] = [];
  deleteProduct(id: any, i: any) {
    this.global.deleteSingleProduct(id).subscribe((data: any) => {
      this.delProduct = data;
    });
    this.global.limited.splice(i, 1);
    console.log(this.delProduct);
  }

  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe((data) => {
      this.global.userType = data['userType'];
      if (this.global.userType == 'admin' && localStorage.getItem('user')) {
        this.global.navbarFlag = false;
        this.global.isLogin = true;
      }
      console.log(this.global.userType);
    });
  }

}
