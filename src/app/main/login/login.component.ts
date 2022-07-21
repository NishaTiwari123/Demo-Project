import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../appServices/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _login: HeaderService,
              private _router: Router) {}

  ngOnInit() {}

  onLogin(uname,pass) {
    if(pass.value==123){
      this._login.loginBtnDetail.next(uname.value);
      this._router.navigate(['/index']);
    }
    else{
      alert('Oops... Your password is incorrect');
    }
  }
}
