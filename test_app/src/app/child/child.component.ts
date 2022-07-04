import { Component, OnInit } from '@angular/core';
import { isNil as _isNil } from 'lodash-es';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'tst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  public val$!: Observable<string>;
  public val!: string;

  constructor() {}

  ngOnInit(): void {
    this.val$ = of('the value');

    if (_isNil(this.val)) {
      this.val = 'default value';
    }
  }
}
