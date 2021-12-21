import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyptoDashboardComponent } from './cypto-dashboard.component';

describe('CyptoDashboardComponent', () => {
  let component: CyptoDashboardComponent;
  let fixture: ComponentFixture<CyptoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyptoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyptoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
