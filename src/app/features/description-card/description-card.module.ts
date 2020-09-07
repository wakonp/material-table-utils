import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './description-card.component';
import { DescriptionCardContentComponent } from './description-card-content/description-card-content.component';
import { DescriptionCardTableComponent } from './description-card-table/description-card-table.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgContentUtilsModule } from '../ng-content-utils/ng-content-utils.module';

@NgModule({
  declarations: [
    DescriptionCardComponent,
    DescriptionCardContentComponent,
    DescriptionCardTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgContentUtilsModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    DescriptionCardComponent,
    DescriptionCardContentComponent,
    DescriptionCardTableComponent,
  ],
})
export class DescriptionCardModule {}
