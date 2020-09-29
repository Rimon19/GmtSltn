import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFastReactIntgrationComponent } from './edit-fast-react-intgration.component';

describe('EditFastReactIntgrationComponent', () => {
  let component: EditFastReactIntgrationComponent;
  let fixture: ComponentFixture<EditFastReactIntgrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFastReactIntgrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFastReactIntgrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
