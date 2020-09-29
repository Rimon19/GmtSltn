import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAccountCreationComponent } from './item-account-creation.component';

describe('ItemAccountCreationComponent', () => {
  let component: ItemAccountCreationComponent;
  let fixture: ComponentFixture<ItemAccountCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAccountCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
