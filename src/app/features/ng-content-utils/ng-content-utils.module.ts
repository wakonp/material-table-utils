import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentAltComponent } from './ng-content-alt/ng-content-alt.component';
import { NgContentCheckerComponent } from './ng-content-checker/ng-content-checker.component';

@NgModule({
  declarations: [NgContentAltComponent, NgContentCheckerComponent],
  imports: [CommonModule],
  exports: [NgContentAltComponent, NgContentCheckerComponent],
})
export class NgContentUtilsModule {}
