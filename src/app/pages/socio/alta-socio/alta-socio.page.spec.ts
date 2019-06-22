import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSocioPage } from './alta-socio.page';

describe('AltaSocioPage', () => {
  let component: AltaSocioPage;
  let fixture: ComponentFixture<AltaSocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaSocioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
