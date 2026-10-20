import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GRouting } from './g-routing';

describe('GRouting', () => {
  let component: GRouting;
  let fixture: ComponentFixture<GRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GRouting]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
