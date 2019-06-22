import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosHomePage } from './juegos-home.page';

describe('JuegosHomePage', () => {
  let component: JuegosHomePage;
  let fixture: ComponentFixture<JuegosHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
