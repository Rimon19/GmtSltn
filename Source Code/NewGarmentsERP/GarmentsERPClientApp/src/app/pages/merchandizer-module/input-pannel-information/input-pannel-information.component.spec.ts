import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPannelInformationComponent } from './input-pannel-information.component';

describe('InputPannelInformationComponent', () => {
  let component: InputPannelInformationComponent;
  let fixture: ComponentFixture<InputPannelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPannelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPannelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
