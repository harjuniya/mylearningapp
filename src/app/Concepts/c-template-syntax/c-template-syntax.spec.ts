import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CTemplateSyntax } from './c-template-syntax';

describe('CTemplateSyntax', () => {
  let component: CTemplateSyntax;
  let fixture: ComponentFixture<CTemplateSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTemplateSyntax]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CTemplateSyntax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
