import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnFilterRoutingModule } from './column-filter-routing.module';
import { ColumnFilterComponent } from './column-filter.component';
import { DescriptionCardModule } from 'src/app/features/description-card/description-card.module';

@NgModule({
  declarations: [ColumnFilterComponent],
  imports: [CommonModule, ColumnFilterRoutingModule, DescriptionCardModule],
})
export class ColumnFilterModule {}
