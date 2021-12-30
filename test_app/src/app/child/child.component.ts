import { Component, OnInit } from '@angular/core';
import { isNil as _isNil } from 'lodash-es';

@Component({
  selector: 'tst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  public val!: string;

  constructor() {}

  ngOnInit(): void {
    if (_isNil(this.val)) {
      this.val = 'default value';
    }
  }
}
