import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittnaMailSetupComponent } from './edittna-mail-setup.component';

describe('EdittnaMailSetupComponent', () => {
  let component: EdittnaMailSetupComponent;
  let fixture: ComponentFixture<EdittnaMailSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittnaMailSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittnaMailSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
