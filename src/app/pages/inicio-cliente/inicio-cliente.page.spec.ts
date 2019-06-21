import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioClientePage } from './inicio-cliente.page';

describe('InicioClientePage', () => {
  let component: InicioClientePage;
  let fixture: ComponentFixture<InicioClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
