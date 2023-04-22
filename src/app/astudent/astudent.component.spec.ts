import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstudentComponent } from './astudent.component';

describe('AstudentComponent', () => {
  let component: AstudentComponent;
  let fixture: ComponentFixture<AstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
