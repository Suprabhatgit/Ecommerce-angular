import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from './services/function.service';
import { GlobalService } from './services/global.service';
import * as Aos from 'aos';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-Fullstack';
  userType: any;
  mainNavbar: any = [];
  public qty: number = 1;
  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private router: Router,
    private ActivatedRoute:ActivatedRoute,
    private authService: AuthService
  ){
    let user = localStorage.getItem('user');
    if (user) {
      global.isLogin = true;
    }
  }
  ngOnInit() {
    Aos.init();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mainNavbar = document.getElementById('main-navbar');
    const numberScrollY = window.scrollY || 0;
    if (numberScrollY <= 20) {
      this.mainNavbar.style =
        'background-color:  transparent !important; box-shadow: none !important;';
    } else {
      this.mainNavbar.style =
        'background-color: #fff !important; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;';
      console.log('You are 100px from the top to bottom');
    }
  }
}

