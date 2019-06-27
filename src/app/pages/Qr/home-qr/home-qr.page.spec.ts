import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQrPage } from './home-qr.page';

describe('HomeQrPage', () => {
  let component: HomeQrPage;
  let fixture: ComponentFixture<HomeQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
