import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  authenValid: boolean;
  authenError = false;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  // tslint:disable-next-line:typedef
  submitForm(user){
    // do submit
    // @ts-ignore
    this.authenValid = this.loginService.loginAuthenticate(user);
    if (this.authenValid) { this.router.navigate(['private']); }
    else { this.authenError = true; }
  }

}
