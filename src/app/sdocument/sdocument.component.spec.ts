import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdocumentComponent } from './sdocument.component';

describe('SdocumentComponent', () => {
  let component: SdocumentComponent;
  let fixture: ComponentFixture<SdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
