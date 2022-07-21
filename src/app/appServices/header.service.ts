import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {

  constructor() { }
  headerContactDetail=new BehaviorSubject(false);
  headerNavDetail=new BehaviorSubject(true);
  goBackLinkDetail=new BehaviorSubject({url:'',text:''});
  loginNavDetail=new BehaviorSubject(true);
  loginBtnDetail=new BehaviorSubject('');
}