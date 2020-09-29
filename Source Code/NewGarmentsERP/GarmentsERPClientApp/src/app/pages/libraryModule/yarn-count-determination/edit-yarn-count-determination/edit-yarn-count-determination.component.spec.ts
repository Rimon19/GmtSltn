import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnCountDeterminationComponent } from './edit-yarn-count-determination.component';

describe('EditYarnCountDeterminationComponent', () => {
  let component: EditYarnCountDeterminationComponent;
  let fixture: ComponentFixture<EditYarnCountDeterminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnCountDeterminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnCountDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
