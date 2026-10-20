import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NQualityAndDelivery } from './n-quality-and-delivery';

describe('NQualityAndDelivery', () => {
  let component: NQualityAndDelivery;
  let fixture: ComponentFixture<NQualityAndDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NQualityAndDelivery]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NQualityAndDelivery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
