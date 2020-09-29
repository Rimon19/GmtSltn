import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemAccountCreationComponent } from './edit-item-account-creation.component';

describe('EditItemAccountCreationComponent', () => {
  let component: EditItemAccountCreationComponent;
  let fixture: ComponentFixture<EditItemAccountCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemAccountCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
