import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasPage } from './encuestas.page';

describe('EncuestasPage', () => {
  let component: EncuestasPage;
  let fixture: ComponentFixture<EncuestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
