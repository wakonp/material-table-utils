import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentAltComponent } from './ng-content-alt.component';

describe('NgContentAltComponent', () => {
  let component: NgContentAltComponent;
  let fixture: ComponentFixture<NgContentAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
