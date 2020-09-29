import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimsCostingTemplateComponent } from './trims-costing-template.component';

describe('TrimsCostingTemplateComponent', () => {
  let component: TrimsCostingTemplateComponent;
  let fixture: ComponentFixture<TrimsCostingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimsCostingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimsCostingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
