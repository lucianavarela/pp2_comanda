import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoPage } from './bienvenido.page';

describe('BienvenidoPage', () => {
  let component: BienvenidoPage;
  let fixture: ComponentFixture<BienvenidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
