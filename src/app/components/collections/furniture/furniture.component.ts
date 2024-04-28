import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { 
    this.global.getFurniture().subscribe(
      (data) => {
        this.global.furniture = data.products;
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
