import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPage } from './empleados.page';

describe('EmpleadosPage', () => {
  let component: EmpleadosPage;
  let fixture: ComponentFixture<EmpleadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
