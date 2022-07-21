import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../appServices/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private _contact: HeaderService) {}

  ngOnInit() {
    this._contact.headerContactDetail.next(true);
    this._contact.loginNavDetail.next(false);
  }
  ngOnDestroy() {
    this._contact.headerContactDetail.next(false);
    this._contact.loginNavDetail.next(true);
  }
}
