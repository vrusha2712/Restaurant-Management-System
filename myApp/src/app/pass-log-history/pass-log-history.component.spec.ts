import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassLogHistoryComponent } from './pass-log-history.component';

describe('PassLogHistoryComponent', () => {
  let component: PassLogHistoryComponent;
  let fixture: ComponentFixture<PassLogHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassLogHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassLogHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
