import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationBulletinComponent } from './operation-bulletin.component';

describe('OperationBulletinComponent', () => {
  let component: OperationBulletinComponent;
  let fixture: ComponentFixture<OperationBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationBulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
