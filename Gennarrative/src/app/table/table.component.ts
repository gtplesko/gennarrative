import { Component, OnInit, Input } from '@angular/core';
import {Taxon } from "../taxon"
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() data:any[];
  @Input() title:string;
  header:string[] = [];
  stringify = JSON.stringify;
  dataRender = [];
  checkList = [];
  selection(content: string){
    this.checkList[content] = !this.checkList[content];
  }
  selections(content: string[]){
    for(let i in content){
      this.checkList[content[i]] = !this.checkList[content[i]];
    }
  }
  constructor() { }

  ngOnInit() {
    this.data = this.swords.children.slice(0);
    for( let i = 0; i < this.data.length; i++){
      this.header[i] = this.data[i].subject
      this.dataRender[i] = this.data[i].children;
    }
  }
  swords:Taxon = {
    subject: 'swords',
    children:[
      {
        subject:'single-edged',
        children:['backsword', 'dao', 'hook-sword','kopis','katana','hanger','falchion', 'cutlass','sabre','scimitar'],
        parent: 'swords'
      },
      {
        subject:'two-handed',
        children:['great sword', 'claymore', 'zweihander','svardstaff'],
        parent: 'swords' 
      },
      {
        subject:'thrusting',
        children:['xiphos','rapier','panzerstecher', 'koncerz','estoc','small-sword'],
        parent: 'swords'
      },
      {
        subject: 'double-edged',
        children:['jian','longsword','broadsword','short-sword','seax','gladius','baselard','cinquedea','dirk','hanger'],
        parent: 'swords'
      },
      {
        subject:'african',
        children:['flyssa','kaskara','khopesh','mameluke-sword','nimcha','takoba','saif','scimitar','zulfiqar','khanjar','kamuziri','billao','shotel','gorade',
        'ida','eben','ada','akrafena','nsuaefena','afenatene','afenanta','mpomponsuo','bosomfena','ndombe','mambele','ilwoon','bakatwa'],
      },
      {
        subject:'east-asian',
        children:['jian','baguajian','shuangshou-jian','dao','baguadao','butterfly-sword','changdao','dadao','errendao','kaishandao','liuyedao','mazhadao','piandao',
        'taijidao','taijijian','miao-dao','nan-dao','wodao','xuehuadao','yanmaodao','yutoudao','zhanmadao','hook-sword'],
        parent: 'swords'
      },
      {
        subject:'japan',
        children:['nihonto','bokken','chisakatana','chokuto','hachiwara','iaito','jintachi','katana','kodachi','nagamaki','ninjato','nodachi','odachi','okatana','shinai',
        'shinken','shikomizue','tachi','tsurugi','uchigatana','wakazashi','dotanuki'],
        parent: 'swords'
      },
      {
        subject:'korea',
        children:['hwandudaedo','saingeom','jedokgum','ssangeom'],
        parent: 'swords'
      },
      {
        subject:'southeast-asian',
        children:['golok','luwuk','klewang','parang','pandat','dha','balisword','bolo','butot-pagi','dahong-palay','kalis','kapilan','panabas','pinuti','krabi'],
        parent: 'swords'
      },
      {
        subject:'south-asian',
        children:['patag','asi','firangi','hengdang','talwar','kayamkulam-vaal','khanda','malappuram-kathi','moplah','pata','urumi','ram-dao','kastane'],
        parent: 'swords'
      },
      {
        subject:'west-asian',
        children:['acinaces','talwar','pulwar','shamshir','kilij','yataghan'],
        parent: 'swords'
      },
      {
        subject:'european',
        children:['xiphos','makhaira','falcata','kopis','celtic','harpe','falx','gladius','spatha','falchion','viking-sword','seax','paramerion',
        'khmali','arming-sword','longsword','estoc','claymore','curtana','rapier','sabre','epee','foil','fencing-sabre'],
        parent: 'swords'
      },
    ],
    parent: "weapons"
  }
}