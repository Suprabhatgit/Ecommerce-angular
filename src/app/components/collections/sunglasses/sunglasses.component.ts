import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.css']
})
export class SunglassesComponent implements OnInit {

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { 
    this.global.getMensSunglasses().subscribe(
      (data) => {
        this.global.sunglasses = data.products;
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
