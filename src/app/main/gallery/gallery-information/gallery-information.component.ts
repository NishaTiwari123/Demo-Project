import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../../appServices/header.service';

@Component({
  selector: 'app-gallery-information',
  templateUrl: './gallery-information.component.html',
  styleUrls: ['./gallery-information.component.css'],
})
export class GalleryInformationComponent implements OnInit, OnDestroy {
  constructor(private _nav: HeaderService, private _link: HeaderService) {}

  ngOnInit() {
    this._nav.headerNavDetail.next(false);
    this._link.goBackLinkDetail.next({
      text: 'Back to Gallery',
      url: '/gallery',
    });
  }
  ngOnDestroy() {
    this._nav.headerNavDetail.next(true);
    this._link.goBackLinkDetail.next({ text: '', url: '' });
  }
}
