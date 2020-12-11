import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://192.168.103.57:8080/api/auth/login';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  loginAuthenticate(user) {
    // send request to server
    this.http.post<string>(this.loginUrl, user).pipe(

    )(
      data => {
        if (data === null) {
          return false;
        } else {
          // save token
          sessionStorage.setItem('Authentication', 'Bearer ' + JSON.stringify(data));
          return true;
        }
      }
    );
  }

}
