import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model = {
    userName: '',
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: 0,
    gender: '',
    role:''
  };
  msgError: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.signUp(this.model).subscribe(
        (data) => {
          console.log('Registration successful:', data);
          this.router.navigateByUrl('/login');
        },
        (error) => {
          console.error('Registration error:', error);
          this.msgError = error.error.message || 'An error occurred during registration.';
        }
      );
    }
  }

}
