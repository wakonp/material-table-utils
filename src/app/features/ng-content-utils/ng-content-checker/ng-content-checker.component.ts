import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-content-checker',
  templateUrl: './ng-content-checker.component.html',
  styleUrls: ['./ng-content-checker.component.scss'],
})
export class NgContentCheckerComponent {
  @ViewChild('contentWrapper', { static: false }) contentWrapper: ElementRef;
  get hasContent(): boolean {
    return this.contentWrapper?.nativeElement?.childNodes?.length > 0;
  }
}
