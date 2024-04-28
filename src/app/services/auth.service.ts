import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  userType:string | undefined;

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post('https://localhost:7022/api/Auth/login', body);
  }
  signUp(userDetails: any): Observable<any> {
    return this.http.post('https://localhost:7022/api/Auth/Register', userDetails);
  }
}
