import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EComponentCommunication } from './e-component-communication';

describe('EComponentCommunication', () => {
  let component: EComponentCommunication;
  let fixture: ComponentFixture<EComponentCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EComponentCommunication]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EComponentCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
