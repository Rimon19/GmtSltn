import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnaMailSetupComponent } from './tna-mail-setup.component';

describe('TnaMailSetupComponent', () => {
  let component: TnaMailSetupComponent;
  let fixture: ComponentFixture<TnaMailSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnaMailSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnaMailSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
