import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KStateAndLifecycle } from './k-state-and-lifecycle';

describe('KStateAndLifecycle', () => {
  let component: KStateAndLifecycle;
  let fixture: ComponentFixture<KStateAndLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KStateAndLifecycle]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KStateAndLifecycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
