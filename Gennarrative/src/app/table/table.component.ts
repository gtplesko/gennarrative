import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  current:ITable
  @Input() header:string[];
  @Input() data:Object[];
  @Input() title:string;
  constructor() { }

  ngOnInit() {
    this.current = {
      title: this.title,
      data: this.data,
      header: Object.keys(this.data)
    } as ITable
  }
}
export interface ITable{
  header:string[];
  data:Object[];
  title:string;
}
//header, data, title
