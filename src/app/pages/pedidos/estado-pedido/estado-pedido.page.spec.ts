import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPedidoPage } from './estado-pedido.page';

describe('EstadoPedidoPage', () => {
  let component: EstadoPedidoPage;
  let fixture: ComponentFixture<EstadoPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
