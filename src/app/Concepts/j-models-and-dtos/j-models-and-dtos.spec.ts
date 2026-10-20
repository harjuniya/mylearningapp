import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JModelsAndDtos } from './j-models-and-dtos';

describe('JModelsAndDtos', () => {
  let component: JModelsAndDtos;
  let fixture: ComponentFixture<JModelsAndDtos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JModelsAndDtos]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JModelsAndDtos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
