import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HForms } from './h-forms';

describe('HForms', () => {
  let component: HForms;
  let fixture: ComponentFixture<HForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HForms]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
