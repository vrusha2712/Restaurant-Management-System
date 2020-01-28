import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenulistComponent } from './user-menulist.component';

describe('UserMenulistComponent', () => {
  let component: UserMenulistComponent;
  let fixture: ComponentFixture<UserMenulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
