import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarClientesPage } from './activar-clientes.page';

describe('ActivarClientesPage', () => {
  let component: ActivarClientesPage;
  let fixture: ComponentFixture<ActivarClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
