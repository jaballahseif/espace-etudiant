import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoteComponent } from './snote.component';

describe('SnoteComponent', () => {
  let component: SnoteComponent;
  let fixture: ComponentFixture<SnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
