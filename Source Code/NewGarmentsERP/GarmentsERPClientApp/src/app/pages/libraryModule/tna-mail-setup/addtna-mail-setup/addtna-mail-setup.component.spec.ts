import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtnaMailSetupComponent } from './addtna-mail-setup.component';

describe('AddtnaMailSetupComponent', () => {
  let component: AddtnaMailSetupComponent;
  let fixture: ComponentFixture<AddtnaMailSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtnaMailSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtnaMailSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
