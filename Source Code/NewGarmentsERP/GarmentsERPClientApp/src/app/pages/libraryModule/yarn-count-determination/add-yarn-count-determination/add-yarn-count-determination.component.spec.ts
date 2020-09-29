import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnCountDeterminationComponent } from './add-yarn-count-determination.component';

describe('AddYarnCountDeterminationComponent', () => {
  let component: AddYarnCountDeterminationComponent;
  let fixture: ComponentFixture<AddYarnCountDeterminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnCountDeterminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnCountDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
