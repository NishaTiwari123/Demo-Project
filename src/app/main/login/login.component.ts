import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../appServices/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _login: HeaderService, private _router: Router) {}

  ngOnInit() {
    // if(sessionStorage.getItem('isLoggedIn')){
    //   this._router.navigate['./index']
    // }
    // else{
    //   this._router.navigate['./login']
    // }
    this.get();
  }
  set() {
    sessionStorage.setItem('isLoggedIn', 'true');
  }
  get() {
    sessionStorage.getItem('isLoggedIn');
  }

  onLogin(uname, pass) {
    sessionStorage.setItem('isLoggedIn', 'true');
    if (pass.value == 123) {
      this._login.loginBtnDetail.next(uname.value);
      this._router.navigate(['/index']);
    } else {
      alert('Oops... Your password is incorrect');
    }
  }
}
