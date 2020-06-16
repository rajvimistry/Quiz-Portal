import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onForgotPasswordClick(): void{
    this.route.navigate(['/forgotPassword']);
  }

  onNewUserClick(): void{
    this.route.navigate(['/register']);
  }

}
