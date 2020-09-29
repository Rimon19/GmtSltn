import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupProfileComponent } from './add-group-profile.component';

describe('AddGroupProfileComponent', () => {
  let component: AddGroupProfileComponent;
  let fixture: ComponentFixture<AddGroupProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
