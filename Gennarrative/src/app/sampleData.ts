import { OnInit, Input } from '@angular/core';
import {Root} from "./root";
import {Taxon} from "./taxon";

export class SwordData() extends OnInit{
  sword:Root;
  types:Taxon[];

  ngOnInit() {
    types: [
      {
        subject:'single-edged',
        children:['backsword', 'dao', 'hook sword','kopis','katana','hanger','falchion', 'cutlass','sabre','scimitar'],
        parent: this.sword
      },
      {
        subject:'two-handed',
        children:['great sword', 'claymore', 'zweihander','svardstaff'],
        parent: this.sword
      },
    ],
    sword: {
      subject: 'Swords',
      children: this.types
    };
  }

  flattenObject = (inp)=>{
    var toReturn = {};

    for (var i in inp) {
        if (!inp.hasOwnProperty(i)) continue;

        if ((typeof inp[i]) == 'object' && inp[i] !== null) {
            var flatObject = this.flattenObject(inp[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = inp[i];
        }
    }
    return toReturn;
  }
}
