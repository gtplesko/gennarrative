import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loadState: any = {};
  visibility = 'hide';
  constructor( private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.loading.subscribe((data: {loaded: boolean, data: any[]}) => {
      this.loadState = data;
      this.visibility = data.loaded ? 'hide' : 'show';
    })
  }

}
