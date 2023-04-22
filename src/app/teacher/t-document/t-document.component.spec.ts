import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDocumentComponent } from './t-document.component';

describe('TDocumentComponent', () => {
  let component: TDocumentComponent;
  let fixture: ComponentFixture<TDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
