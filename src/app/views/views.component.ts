import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route, ActivatedRoute } from '@angular/router';

type NavTitleRoute = Route & { data: { navTitle: string } };

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private aR: ActivatedRoute
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navRoutes: NavTitleRoute[] = (this.aR.routeConfig.children as NavTitleRoute[])
    .filter((r) => r.data?.navTitle)
    .sort((a, b) => a.data.navTitle.localeCompare(b.data.navTitle));
}
