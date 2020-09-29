import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFastReactIntgrationComponent } from './add-fast-react-intgration.component';

describe('AddFastReactIntgrationComponent', () => {
  let component: AddFastReactIntgrationComponent;
  let fixture: ComponentFixture<AddFastReactIntgrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFastReactIntgrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFastReactIntgrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
