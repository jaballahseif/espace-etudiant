import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnoteComponent } from './tnote.component';

describe('TnoteComponent', () => {
  let component: TnoteComponent;
  let fixture: ComponentFixture<TnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
