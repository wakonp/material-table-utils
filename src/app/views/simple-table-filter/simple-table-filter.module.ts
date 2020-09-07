import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableFilterRoutingModule } from './simple-table-filter-routing.module';
import { SimpleTableFilterComponent } from './simple-table-filter.component';


@NgModule({
  declarations: [SimpleTableFilterComponent],
  imports: [
    CommonModule,
    SimpleTableFilterRoutingModule
  ]
})
export class SimpleTableFilterModule { }
