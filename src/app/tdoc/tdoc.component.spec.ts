import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdocComponent } from './tdoc.component';

describe('TdocComponent', () => {
  let component: TdocComponent;
  let fixture: ComponentFixture<TdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
