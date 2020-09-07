import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentCheckerComponent } from './ng-content-checker.component';

describe('NgContentCheckerComponent', () => {
  let component: NgContentCheckerComponent;
  let fixture: ComponentFixture<NgContentCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
