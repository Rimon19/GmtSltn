import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrimsCostingTemplateComponent } from './add-trims-costing-template.component';

describe('AddTrimsCostingTemplateComponent', () => {
  let component: AddTrimsCostingTemplateComponent;
  let fixture: ComponentFixture<AddTrimsCostingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrimsCostingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrimsCostingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
