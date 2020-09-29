import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {
    console.log(this.auth.isLoggedIn + "login con")
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn == true) {
      console.log(this.auth.isLoggedIn)
      this.route.navigate(["app-listing"])
    }
  }

  authenticate(event) {
    const username = event.target.querySelector("#username").value
    const password = event.target.querySelector("#password").value
    console.log(event)
    this.auth.authenticate(username, password)
    
    if (this.auth.loggedIn == true) {
      this.route.navigate(["app-listing"])
    } else {
      this.route.navigate(["login"])
    }
  }

}
