import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagersComponent } from './wagers.component';

describe('WagersComponent', () => {
  let component: WagersComponent;
  let fixture: ComponentFixture<WagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
