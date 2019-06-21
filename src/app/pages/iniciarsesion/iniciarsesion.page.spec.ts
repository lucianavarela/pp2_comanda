import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionPage } from './iniciarsesion.page';

describe('IniciarsesionPage', () => {
  let component: IniciarsesionPage;
  let fixture: ComponentFixture<IniciarsesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarsesionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
