import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../appServices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  goBackLinks; //for Back Links container
  headerNav; //for navigation bar container
  loginNav; //for login page container
  contactNav; //for contact container
  loginBtn; //for signup hide and show

  constructor(
    private _contact: HeaderService,
    private _nav: HeaderService,
    private _link: HeaderService,
    private _loginNav: HeaderService,
    private _login: HeaderService
  ) {
    this._contact.headerContactDetail.subscribe((res) => {
      this.contactNav = res;
    });

    this._nav.headerNavDetail.subscribe((res) => {
      this.headerNav = res;
    });

    this._link.goBackLinkDetail.subscribe((res) => {
      this.goBackLinks = res;
    });

    this._loginNav.loginNavDetail.subscribe((res) => {
      this.loginNav = res;
    });

    this._login.loginBtnDetail.subscribe((res) => {
      this.loginBtn = res;
    });
  }

  onLogout(){
    this._login.loginBtnDetail.next('');
  }
  ngOnInit() {}
}
