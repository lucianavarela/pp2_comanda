import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasPage } from './mesas.page';

describe('MesasPage', () => {
  let component: MesasPage;
  let fixture: ComponentFixture<MesasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
