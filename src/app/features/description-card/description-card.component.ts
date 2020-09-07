import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
})
export class DescriptionCardComponent {
  constructor(private aR: ActivatedRoute) {}
  viewTitle: string = this.aR.parent.routeConfig.data.navTitle;
}
