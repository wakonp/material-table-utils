import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ViewsComponent } from './views.component';

export const routes: Route[] = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: '', redirectTo: 'simple-table', pathMatch: 'full' },
      {
        path: 'simple-table',
        data: {
          navTitle: 'Simple Table',
        },
        loadChildren: () =>
          import('./simple-table/simple-table.module').then(
            (m) => m.SimpleTableModule
          ),
      },
      {
        path: 'simple-table-filter',
        data: {
          navTitle: 'Simple Table Filter',
        },
        loadChildren: () =>
          import('./simple-table-filter/simple-table-filter.module').then(
            (m) => m.SimpleTableFilterModule
          ),
      },
      {
        path: 'column-filter',
        data: {
          navTitle: 'Column Filter',
        },
        loadChildren: () =>
          import('./column-filter/column-filter.module').then(
            (m) => m.ColumnFilterModule
          ),
      },
      {
        path: 'multi-column-sort',
        data: {
          navTitle: 'Multi Column Sort',
        },
        loadChildren: () =>
          import('./multi-column-sort/multi-column-sort.module').then(
            (m) => m.MultiColumnSortModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
