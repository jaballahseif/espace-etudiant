import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSComponent } from './table-s.component';

describe('TableSComponent', () => {
  let component: TableSComponent;
  let fixture: ComponentFixture<TableSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
