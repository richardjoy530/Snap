import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthService, private route: Router, public form: FormBuilder) {
    this.loginForm = this.form.group({
      username: '',
      password: '',
    })
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn == true) {
      this.route.navigate(["app-listing"])
    }
  }

  authenticate() {
    this.auth.authenticate(this.loginForm.value.username, this.loginForm.value.password)
    if (this.auth.isLoggedIn == true) {
      this.route.navigate(["app-listing"])
    } else {
      this.route.navigate(["login"])
    }
  }

}
