import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingOperationComponent } from './sewing-operation.component';

describe('SewingOperationComponent', () => {
  let component: SewingOperationComponent;
  let fixture: ComponentFixture<SewingOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
