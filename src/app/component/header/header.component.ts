import { Component, OnInit } from '@angular/core';
import {RouteGuardService} from '../../service/guard/route-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedin: boolean;

  constructor(private guardService: RouteGuardService) { }

  ngOnInit(): void {
    this.isLoggedin = this.guardService.isLoggedIn();
  }

}
