import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTComponent } from './table-t.component';

describe('TableTComponent', () => {
  let component: TableTComponent;
  let fixture: ComponentFixture<TableTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
