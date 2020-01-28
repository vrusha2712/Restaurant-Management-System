import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenulist1Component } from './user-menulist1.component';

describe('UserMenulist1Component', () => {
  let component: UserMenulist1Component;
  let fixture: ComponentFixture<UserMenulist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenulist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenulist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
