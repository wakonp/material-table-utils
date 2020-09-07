import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class ViewsModule {}
