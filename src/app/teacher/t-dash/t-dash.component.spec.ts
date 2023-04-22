import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDashComponent } from './t-dash.component';

describe('TDashComponent', () => {
  let component: TDashComponent;
  let fixture: ComponentFixture<TDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
