import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnRateComponent } from './edit-yarn-rate.component';

describe('EditYarnRateComponent', () => {
  let component: EditYarnRateComponent;
  let fixture: ComponentFixture<EditYarnRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
