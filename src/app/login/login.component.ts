import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit(): void {
  }

  authenticate(event) {
    const username = event.target.querySelector("#username").value
    const password = event.target.querySelector("#password").value
    this.auth.authenticate(username, password)
    if (this.auth.loggedIn == true) {
      this.route.navigate(["app-listing"])
    } else {
      this.route.navigate(["login"])
    }
  }

}
