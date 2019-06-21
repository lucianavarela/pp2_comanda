import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetiPage } from './tateti.page';

describe('TatetiPage', () => {
  let component: TatetiPage;
  let fixture: ComponentFixture<TatetiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatetiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
