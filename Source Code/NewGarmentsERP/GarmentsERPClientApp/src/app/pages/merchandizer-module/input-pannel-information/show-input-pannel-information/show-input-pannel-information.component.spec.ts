import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInputPannelInformationComponent } from './show-input-pannel-information.component';

describe('ShowInputPannelInformationComponent', () => {
  let component: ShowInputPannelInformationComponent;
  let fixture: ComponentFixture<ShowInputPannelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInputPannelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInputPannelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
