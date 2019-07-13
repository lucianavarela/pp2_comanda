import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenarEncuestaPage } from './llenar-encuesta.page';

describe('LlenarEncuestaPage', () => {
  let component: LlenarEncuestaPage;
  let fixture: ComponentFixture<LlenarEncuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlenarEncuestaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenarEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
