import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoInformationComponent } from './po-information.component';

describe('PoInformationComponent', () => {
  let component: PoInformationComponent;
  let fixture: ComponentFixture<PoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
