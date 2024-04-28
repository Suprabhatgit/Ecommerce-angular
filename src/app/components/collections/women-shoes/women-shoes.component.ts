import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-women-shoes',
  templateUrl: './women-shoes.component.html',
  styleUrls: ['./women-shoes.component.css']
})
export class WomenShoesComponent implements OnInit {

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { 
    this.global.getWomenShoes().subscribe(
      (data) => {
        this.global.womanShoes = data.products;
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
