import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpFileComponent } from './erp-file.component';

describe('ErpFileComponent', () => {
  let component: ErpFileComponent;
  let fixture: ComponentFixture<ErpFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
