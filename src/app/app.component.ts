import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gennarative';
  constructor(private shared: SharedService) {
    // setTimeout( () => {
    //   this.shared.setLoadState({load1: true, load2: true});
    //   setTimeout( () => {
    //     this.shared.setLoadState({load2: false});
    //     setTimeout( () => {
    //       this.shared.setLoadState({load1: false, load3: true});
    //       setTimeout( () => {
    //         this.shared.setLoadState({load3: false});
    //       }, 5000);
    //     }, 5000);
    //   }, 5000);
    // }, 5000);
  }
}
