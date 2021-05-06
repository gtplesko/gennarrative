import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // --------------------- LOADING STATE ---------------------
  private _LOADING = new BehaviorSubject<any>({loaded: true, data:{}});
  public loading = this._LOADING.asObservable();
  getLoadState() {
    return this._LOADING.getValue();
  }
  setLoadState(state: any) {
    let temp = {loaded: false, data: {}};
    temp.data = { ...this.getLoadState().data, ...state}; // keep this order to ensure overwrites work correctly
    temp.loaded = Object.values(temp.data).every( e => !e ); //we want loading to be true unless all states are false;
    this._LOADING.next(temp);
    console.log(JSON.parse(JSON.stringify(this.getLoadState())));
  }

  constructor() { }
}
