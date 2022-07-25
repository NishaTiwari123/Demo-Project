import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../appServices/header.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css'],
})
export class ProductInformationComponent implements OnInit, OnDestroy {
  constructor(private _nav: HeaderService, private _link: HeaderService,
    private _router:Router) {}

  ngOnInit() {
    this._nav.headerNavDetail.next(false);
    this._link.goBackLinkDetail.next({
      text: 'Back to Product',
      url: '/product',
    });

    if(sessionStorage.getItem('isLoggedIn')){
        this._router.navigate['./product-information']
      }
      else{
        this._router.navigate['./login']
      }
  }

  ngOnDestroy() {
    this._nav.headerNavDetail.next(true);
    this._link.goBackLinkDetail.next({text:'',url:''});
  }
}
