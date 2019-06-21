import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPedidoPage } from './carga-pedido.page';

describe('CargaPedidoPage', () => {
  let component: CargaPedidoPage;
  let fixture: ComponentFixture<CargaPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
