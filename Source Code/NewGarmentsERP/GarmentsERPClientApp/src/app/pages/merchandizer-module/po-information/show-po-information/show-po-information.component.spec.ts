import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPoInformationComponent } from './show-po-information.component';

describe('ShowPoInformationComponent', () => {
  let component: ShowPoInformationComponent;
  let fixture: ComponentFixture<ShowPoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
