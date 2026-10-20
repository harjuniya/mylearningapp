import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BAngularComponents } from './b-angular-components';

describe('BAngularComponents', () => {
  let component: BAngularComponents;
  let fixture: ComponentFixture<BAngularComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BAngularComponents]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BAngularComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
