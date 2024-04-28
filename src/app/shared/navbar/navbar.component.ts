import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   searchValue: any;
   search= false;

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
  searchBox() {
    this.search == true;
    this.global.getProductBySearch(this.searchValue).subscribe((data) => {
      this.global.searchBox = data.products;
      console.log(this.global.searchBox);
      console.log(this.searchValue);
    });
  }
 
  handleClick() {
    localStorage.removeItem('user');
    this.global.isLogin = false;
    window.location.reload();
  }

  ngOnInit(): void {
  }
  

}
