import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't2-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
