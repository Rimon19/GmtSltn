import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpImagesComponent } from './erp-images.component';

describe('ErpImagesComponent', () => {
  let component: ErpImagesComponent;
  let fixture: ComponentFixture<ErpImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
