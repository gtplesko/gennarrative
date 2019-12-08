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
  constructor() { }

  ngOnInit() {
    this.data = this.swords.slice(0);
    for( let i = 0; i < this.data.length; i++){
      this.header[i] = this.data[i].subject
      this.dataRender[i] = this.data[i].children;
    }
  }
  swords:Taxon[] = [
    {
      subject:'single-edged',
      children:['backsword', 'dao', 'hook sword','kopis','katana','hanger','falchion', 'cutlass','sabre','scimitar'],
      parent: undefined
    },
    {
      subject:'two-handed',
      children:['great sword', 'claymore', 'zweihander','svardstaff'],
      parent: undefined 
    },
    {
      subject:'thrusting',
      children:['xiphos','rapier','panzerstecher', 'koncerz','estoc','small-sword'],
      parent: undefined
    },
    {
      subject: 'double-edged',
      children:['jian','longsword','broadsword','short-sword','seax','gladius','baselard','cinquedea','dirk','hanger'],
      parent: undefined
    },
    {
      subject:'north-african',
      children:['flyssa','kaskara','khopesh','mameluke-sword','nimcha','takoba','saif','scimitar','zulfiqar','khanjar','kamuziri'],
      parent: undefined
    },
    {
      subject:'east-african',
      children:['billao','shotel','gorade'],
      parent: undefined
    },
    {
      subject:'west-african',
      children:['ida','eben','ada','akrafena','nsuaefena','afenatene','afenanta','mpomponsuo','bosomfena'],
      parent: undefined
    },
    {
      subject:'central-african',
      children:['ndombe','mambele','ilwoon'],
      parent: undefined
    },
    {
      subject:'south-african',
      children:['bakatwa'],
      parent: undefined
    },
    {
      subject:'east-asian',
      children:['jian','baguajian','shuangshou-jian','dao','baguadao','butterfly-sword','changdao','dadao','errendao','kaishandao','liuyedao','mazhadao','piandao',
      'taijidao','taijijian','miao-dao','nan-dao','wodao','xuehuadao','yanmaodao','yutoudao','zhanmadao','hook-sword'],
      parent: undefined
    },
    {
      subject:'japan',
      children:['nihonto','bokken','chisakatana','chokuto','hachiwara','iaito','jintachi','katana','kodachi','nagamaki','ninjato','nodachi','odachi','okatana','shinai',
      'shinken','shikomizue','tachi','tsurugi','uchigatana','wakazashi','dotanuki'],
      parent: undefined
    },
    {
      subject:'korea',
      children:['hwandudaedo','saingeom','jedokgum','ssangeom'],
      parent: undefined
    },
    {
      subject:'southeast-asian',
      children:['golok','luwuk','klewang','parang','pandat','dha','balisword','bolo','butot-pagi','dahong-palay','kalis','kapilan','panabas','pinuti','krabi'],
      parent: undefined
    },
    {
      subject:'south-asian',
      children:['patag','asi','firangi','hengdang','talwar','kayamkulam-vaal','khanda','malappuram-kathi','moplah','pata','urumi','ram-dao','kastane'],
      parent: undefined
    },
    {
      subject:'west-asian',
      children:['acinaces','talwar','pulwar','shamshir','kilij','yataghan'],
      parent: undefined
    },
    {
      subject:'ancient-european',
      children:['xiphos','makhaira','falcata','kopis','celtic','harpe','falx','gladius','spatha','falchion'],
      parent: undefined
    },
    {
      subject:'post-classic-european',
      children:['viking-sword','seax','paramerion','khmali','arming-sword','longsword','estoc','claymore','curtana'],
      parent: undefined
    },
    {
      subject:'modern-european',
      children:['rapier','sabre','epee','foil','fencing-sabre'],
      parent: undefined
    },
    
  ]
}