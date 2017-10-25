import { FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filter: any;
  @Input() filters: any;
  @Output() changeFilter = new EventEmitter<any> ();
  @Input() set active(val) {
    this.filter.setValue(val);
  }
  constructor() {
    this.filter = new FormControl();
   }

  ngOnInit() {
  }

}
