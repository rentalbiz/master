import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCategoriesComponent } from './left-categories.component';

describe('LeftCategoriesComponent', () => {
  let component: LeftCategoriesComponent;
  let fixture: ComponentFixture<LeftCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
