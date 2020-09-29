import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnRateComponent } from './add-yarn-rate.component';

describe('AddYarnRateComponent', () => {
  let component: AddYarnRateComponent;
  let fixture: ComponentFixture<AddYarnRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
