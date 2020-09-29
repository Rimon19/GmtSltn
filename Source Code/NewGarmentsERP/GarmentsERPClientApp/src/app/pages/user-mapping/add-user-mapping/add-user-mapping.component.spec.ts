import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserMappingComponent } from './add-user-mapping.component';

describe('AddUserMappingComponent', () => {
  let component: AddUserMappingComponent;
  let fixture: ComponentFixture<AddUserMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
