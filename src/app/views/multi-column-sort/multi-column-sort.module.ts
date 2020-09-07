import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiColumnSortRoutingModule } from './multi-column-sort-routing.module';
import { MultiColumnSortComponent } from './multi-column-sort.component';
import { DescriptionCardModule } from 'src/app/features/description-card/description-card.module';

@NgModule({
  declarations: [MultiColumnSortComponent],
  imports: [CommonModule, MultiColumnSortRoutingModule, DescriptionCardModule],
})
export class MultiColumnSortModule {}
