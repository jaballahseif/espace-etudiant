import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNoteComponent } from './t-note.component';

describe('TNoteComponent', () => {
  let component: TNoteComponent;
  let fixture: ComponentFixture<TNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
