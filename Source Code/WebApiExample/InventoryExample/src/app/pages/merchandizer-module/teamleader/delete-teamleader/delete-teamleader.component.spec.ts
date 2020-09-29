import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeamleaderComponent } from './delete-teamleader.component';

describe('DeleteTeamleaderComponent', () => {
  let component: DeleteTeamleaderComponent;
  let fixture: ComponentFixture<DeleteTeamleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTeamleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTeamleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
