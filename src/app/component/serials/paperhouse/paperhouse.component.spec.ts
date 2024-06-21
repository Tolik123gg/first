import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperhouseComponent } from './paperhouse.component';

describe('PaperhouseComponent', () => {
  let component: PaperhouseComponent;
  let fixture: ComponentFixture<PaperhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperhouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaperhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
