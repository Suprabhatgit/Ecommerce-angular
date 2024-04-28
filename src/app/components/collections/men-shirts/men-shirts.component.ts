import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent implements OnInit {
  product: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  electronics: any = [];
  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getMensShirts().subscribe(
      (data) => {
        this.global.menShirts = data.products;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
   }

  ngOnInit(): void {
  }

}
