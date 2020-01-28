import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menulist2Component } from './menulist2.component';

describe('Menulist2Component', () => {
  let component: Menulist2Component;
  let fixture: ComponentFixture<Menulist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menulist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menulist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
