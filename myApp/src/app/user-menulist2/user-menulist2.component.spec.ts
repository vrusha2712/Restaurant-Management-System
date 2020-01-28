import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenulist2Component } from './user-menulist2.component';

describe('UserMenulist2Component', () => {
  let component: UserMenulist2Component;
  let fixture: ComponentFixture<UserMenulist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenulist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenulist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
