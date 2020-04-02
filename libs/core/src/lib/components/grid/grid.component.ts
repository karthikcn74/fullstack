import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-hm-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnChanges {
  @Input() gridlist;
  @Input() rowcol: number[];
  @Output() callback = new EventEmitter();
  gridObj = [];
  constructor() {
   }

  ngOnChanges() {
    let obj = [];
    let colRest = 1;
    let rowCnt = 0;

    for(let item of this.gridlist) {
      
      obj.push(item)
      if(colRest >= Number(this.rowcol[1])) {
        colRest = 1;
        rowCnt++;

        this.gridObj = this.gridObj.length === 0 ? [...obj] : [[...this.gridObj], [...obj]];
        obj = [];
        obj.push(item);
      }
      
      colRest++;
    }
  }

  itemSelected(item) {
    this.callback.emit(item)
  }

}
