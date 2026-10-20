import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LReusableArchitecture } from './l-reusable-architecture';

describe('LReusableArchitecture', () => {
  let component: LReusableArchitecture;
  let fixture: ComponentFixture<LReusableArchitecture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LReusableArchitecture]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LReusableArchitecture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
