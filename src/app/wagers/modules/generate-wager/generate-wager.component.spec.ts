import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWagerComponent } from './generate-wager.component';

describe('GenerateWagerComponent', () => {
  let component: GenerateWagerComponent;
  let fixture: ComponentFixture<GenerateWagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateWagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateWagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
