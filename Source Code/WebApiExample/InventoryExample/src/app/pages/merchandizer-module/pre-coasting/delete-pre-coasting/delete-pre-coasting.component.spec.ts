import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePreCoastingComponent } from './delete-pre-coasting.component';

describe('DeletePreCoastingComponent', () => {
  let component: DeletePreCoastingComponent;
  let fixture: ComponentFixture<DeletePreCoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePreCoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePreCoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
