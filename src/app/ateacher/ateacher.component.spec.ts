import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteacherComponent } from './ateacher.component';

describe('AteacherComponent', () => {
  let component: AteacherComponent;
  let fixture: ComponentFixture<AteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
