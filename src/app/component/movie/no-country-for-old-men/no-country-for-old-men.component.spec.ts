import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCountryForOldMenComponent } from './no-country-for-old-men.component';

describe('NoCountryForOldMenComponent', () => {
  let component: NoCountryForOldMenComponent;
  let fixture: ComponentFixture<NoCountryForOldMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoCountryForOldMenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoCountryForOldMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
