import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserMappingComponent } from './edit-user-mapping.component';

describe('EditUserMappingComponent', () => {
  let component: EditUserMappingComponent;
  let fixture: ComponentFixture<EditUserMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
