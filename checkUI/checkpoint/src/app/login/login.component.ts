import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private loginService: LoginService,
              private router: Router) { }

  onSubmit() {
    this.loginService.login(this.model.username, this.model.password).subscribe(
      () => {
        this.router.navigate(['attractions']);
      });
  }

  ngOnInit() {
  }

}
