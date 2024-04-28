import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  model={
    email:'',
    password:''
  }
  msgError = null;

  constructor(
    private global: GlobalService,
    private router: Router,
    public functions: FunctionService,
    private authService: AuthService,
    private Activatedroute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.Activatedroute.data.subscribe((data) => {
      this.authService.userType = data['userType'];
      if (
        this.authService.userType == 'admin' &&
        localStorage.getItem('user') != null
      ) {
        this.global.navbarFlag = false;
        this.global.isLogin = true;
      }
      console.log(this.authService.userType);
    });
  }
  handleSubmit(form: NgForm) {
    if (this.authService.userType == 'user') {
      this.authService.login(this.model.email,this.model.password)?.subscribe(
        (data) => {
          this.functions.writeToStorage(data, 'user');
          this.router.navigateByUrl('/collection/all');
        },

        (e) => {
          console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
      this.global.isLogin = true;
    } else if (this.authService.userType == 'admin') {
      this.authService.login(this.model.email,this.model.password)?.subscribe(
        (data) => {
          this.functions.writeToStorage(data, 'user');
          this.router.navigateByUrl('/Admin-dashboard/products');
          this.global.isLogin = true;
          this.global.navbarFlag = false;
        },

        (e) => {
          console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
    }
  }

}
