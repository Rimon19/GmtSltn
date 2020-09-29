import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemAccountCreationComponent } from './add-item-account-creation.component';

describe('AddItemAccountCreationComponent', () => {
  let component: AddItemAccountCreationComponent;
  let fixture: ComponentFixture<AddItemAccountCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemAccountCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
