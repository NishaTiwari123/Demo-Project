import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../../appServices/header.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css'],
})
export class ProductInformationComponent implements OnInit, OnDestroy {
  constructor(private _nav: HeaderService, private _link: HeaderService) {}

  ngOnInit() {
    this._nav.headerNavDetail.next(false);
    this._link.goBackLinkDetail.next({
      text: 'Back to Product',
      url: '/product',
    });
  }

  ngOnDestroy() {
    this._nav.headerNavDetail.next(true);
    this._link.goBackLinkDetail.next({text:'',url:''});
  }
}
