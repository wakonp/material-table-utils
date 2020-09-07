import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableFilterRoutingModule } from './simple-table-filter-routing.module';
import { SimpleTableFilterComponent } from './simple-table-filter.component';
import { DescriptionCardModule } from 'src/app/features/description-card/description-card.module';

@NgModule({
  declarations: [SimpleTableFilterComponent],
  imports: [
    CommonModule,
    SimpleTableFilterRoutingModule,
    DescriptionCardModule,
  ],
})
export class SimpleTableFilterModule {}
