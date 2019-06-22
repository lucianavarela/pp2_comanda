import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservasPage } from './lista-reservas.page';

describe('ListaReservasPage', () => {
  let component: ListaReservasPage;
  let fixture: ComponentFixture<ListaReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
