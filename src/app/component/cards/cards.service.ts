import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _DATA = new BehaviorSubject([]);
  data = this._DATA.asObservable();
  constructor() { }
  getData() {
    return this._DATA.getValue();
  }
  setData( data: any[], page = 0) {
    this._DATA.next([...this.getData(), ...data]);
  }
  loadData(apiTarget, page = 0, pageSize = 25) {
    // this.dbService.get(apiTarget, page, pageSize).subscribe( res => {
    //   this._DATA.next([...this.getData(), ...res]);
    // })
  }
}
