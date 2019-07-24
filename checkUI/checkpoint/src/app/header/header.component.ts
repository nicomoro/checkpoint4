import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.isLogout();
    this.router.navigate(['homepage']);
  }
}
