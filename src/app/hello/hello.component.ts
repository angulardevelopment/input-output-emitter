import {
  AfterViewInit,
  Attribute,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit, AfterViewInit {
  @Input() company: string;
  @Output() close = new EventEmitter();
  @Input() name: string;
  constructor(@Attribute('type') public myVar: string) {
    console.log('Attributre =', myVar);
    this.tableView.isVisible = true;
  }

  ngOnInit(): void {}

  sendData() {
    this.close.emit('data');
  }

  values = '';
  onKey(event: any) {
    // without type info
    this.values += event.target.value + ' | ';
    // onKey(event: KeyboardEvent) { // with type info
    // this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  value = '';
  onEnter(value: string) {
    this.value = value;
  }

  valueblur = '';
  update(value: string) {
    this.valueblur = value;
  }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  serverName;

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  abc = ['gupta', 'singh', 'kumar', 'garg'].sort();

  abcd = ['gupta', 'singh', 'kumar', 'garg'].sort();

  assignCopy() {
    this.abcd = Object.assign([], this.abc);
  }

  filterItem(value) {
    if (!value) this.assignCopy(); //when nothing has typed

    this.abcd = Object.assign([], this.abc).filter(
      (ab) => ab.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
  rangeValue: number = 10;

  isActive: boolean = false;

  press(): void {
    this.isActive = true;

    console.log((this.isActive = true));
  }

  release(): void {
    this.isActive = false;

    console.log((this.isActive = false));
  }

  ngAfterViewInit() {
    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/

        document.getElementById(elmnt.id + 'header').onmousedown =
          dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/

        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;

        // get the mouse cursor position at startup:

        pos3 = e.clientX;

        pos4 = e.clientY;

        document.onmouseup = closeDragElement;

        // call a function whenever the cursor moves:

        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;

        // calculate the new cursor position:

        pos1 = pos3 - e.clientX;

        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;

        pos4 = e.clientY;

        // set the element's new position:

        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';

        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/

        document.onmouseup = null;

        document.onmousemove = null;
      }
    }

    dragElement(document.getElementById('mydiv'));
  }

  onKeyup(target: EventTarget | null) {
    if (target instanceof HTMLInputElement) {
      console.log(target.value);
    }
  }

  deleteHero() {
    console.log('hi');
  }

  tableView = new TableData(5, 4);
  doSomething(row) {
    console.log('doSomething with row', row);
  }
}

export class TableData {
  isVisible: boolean = false;
  rows: Item[] = [];
  columns: Item[] = [];

  constructor(rows?: number, cols?: number) {
    if (rows) {
      for (let i = 0; i < rows; i++) {
        this.addRow(i.toString());
      }
    }

    if (cols) {
      for (let i = 0; i < cols; i++) {
        this.addCol(i.toString());
      }
    }
  }

  addRow(rowTitle: string) {
    let row: Item = {
      id: this.rows.length,
      title: rowTitle,
    };
    this.rows.push(row);
  }

  addCol(colTitle: string) {
    let col: Item = {
      id: this.columns.length,
      title: colTitle,
    };
    this.columns.push(col);
  }
}

interface Item {
  id: number;
  title: string;
}
