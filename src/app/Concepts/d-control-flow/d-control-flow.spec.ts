import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DControlFlow } from './d-control-flow';

describe('DControlFlow', () => {
  let component: DControlFlow;
  let fixture: ComponentFixture<DControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DControlFlow]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DControlFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
