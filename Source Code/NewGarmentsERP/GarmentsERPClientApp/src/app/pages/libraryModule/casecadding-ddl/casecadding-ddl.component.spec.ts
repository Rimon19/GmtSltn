import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasecaddingDDLComponent } from './casecadding-ddl.component';

describe('CasecaddingDDLComponent', () => {
  let component: CasecaddingDDLComponent;
  let fixture: ComponentFixture<CasecaddingDDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasecaddingDDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasecaddingDDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
