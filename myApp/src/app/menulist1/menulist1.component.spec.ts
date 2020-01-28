import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menulist1Component } from './menulist1.component';

describe('Menulist1Component', () => {
  let component: Menulist1Component;
  let fixture: ComponentFixture<Menulist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menulist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menulist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
