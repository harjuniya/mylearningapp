import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAdvancedFeatures } from './m-advanced-features';

describe('MAdvancedFeatures', () => {
  let component: MAdvancedFeatures;
  let fixture: ComponentFixture<MAdvancedFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAdvancedFeatures]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MAdvancedFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
