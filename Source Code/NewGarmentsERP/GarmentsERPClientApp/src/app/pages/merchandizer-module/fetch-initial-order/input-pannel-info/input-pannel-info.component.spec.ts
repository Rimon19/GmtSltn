import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPannelInfoComponent } from './input-pannel-info.component';

describe('InputPannelInfoComponent', () => {
  let component: InputPannelInfoComponent;
  let fixture: ComponentFixture<InputPannelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPannelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPannelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
