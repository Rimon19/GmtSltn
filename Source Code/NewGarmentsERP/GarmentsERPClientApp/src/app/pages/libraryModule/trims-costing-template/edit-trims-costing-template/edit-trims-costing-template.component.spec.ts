import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrimsCostingTemplateComponent } from './edit-trims-costing-template.component';

describe('EditTrimsCostingTemplateComponent', () => {
  let component: EditTrimsCostingTemplateComponent;
  let fixture: ComponentFixture<EditTrimsCostingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrimsCostingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrimsCostingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
