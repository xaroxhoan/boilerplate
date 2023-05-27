import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-dashboard',
  standalone: true,
  template: ` <div>{{ title }}</div> `,
})
export default class DashboardComponent implements OnInit {
  @Input() readonly title?: string;
  @Input() readonly list?: Array<any>;

  ngOnInit(): void {
    const { list, title } = this;
    console.log({ list, title });
  }
}
