import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-women-dresses',
  templateUrl: './women-dresses.component.html',
  styleUrls: ['./women-dresses.component.css']
})
export class WomenDressesComponent implements OnInit {

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getWomenDresses().subscribe(
      (data) => {
        this.global.womanDress = data.products;
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
    Aos.init();
  }

}
