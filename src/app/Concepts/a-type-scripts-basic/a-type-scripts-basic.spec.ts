import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ATypeScriptsBasic } from './a-type-scripts-basic';

describe('ATypeScriptsBasic', () => {
  let component: ATypeScriptsBasic;
  let fixture: ComponentFixture<ATypeScriptsBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATypeScriptsBasic]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ATypeScriptsBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
