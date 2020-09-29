import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingOperationForWorkStudyComponent } from './sewing-operation-for-work-study.component';

describe('SewingOperationForWorkStudyComponent', () => {
  let component: SewingOperationForWorkStudyComponent;
  let fixture: ComponentFixture<SewingOperationForWorkStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingOperationForWorkStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingOperationForWorkStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
