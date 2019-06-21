import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoPage } from './ahorcado.page';

describe('AhorcadoPage', () => {
  let component: AhorcadoPage;
  let fixture: ComponentFixture<AhorcadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
