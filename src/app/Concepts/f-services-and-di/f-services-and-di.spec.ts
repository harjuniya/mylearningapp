import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FServicesAndDi } from './f-services-and-di';

describe('FServicesAndDi', () => {
  let component: FServicesAndDi;
  let fixture: ComponentFixture<FServicesAndDi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FServicesAndDi]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FServicesAndDi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
