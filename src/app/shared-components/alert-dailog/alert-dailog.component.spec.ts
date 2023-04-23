import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDailogComponent } from './alert-dailog.component';

describe('AlertDailogComponent', () => {
  let component: AlertDailogComponent;
  let fixture: ComponentFixture<AlertDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
