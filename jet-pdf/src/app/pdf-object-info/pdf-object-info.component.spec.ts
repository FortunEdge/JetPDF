import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfObjectInfoComponent } from './pdf-object-info.component';

describe('PdfObjectInfoComponent', () => {
  let component: PdfObjectInfoComponent;
  let fixture: ComponentFixture<PdfObjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfObjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfObjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
